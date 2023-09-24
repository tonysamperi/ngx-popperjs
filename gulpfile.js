"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    path = require("path"),
    exec = require("child_process").exec,
    sass = require("gulp-sass"),
    {inc} = require("semver"),
    log = require("plugin-log"),
    {obj} = require("through2")
;

const libName = "ngx-popperjs";
const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = path.join(rootFolder, `dist/${libName}`);

const doBump = (type) => {
    return Promise.all(["./", path.join(rootFolder, "projects", libName)].map((p) => {
        return gulp.src(path.join(p, "package.json"))
            .pipe(obj((file, enc, cb) => {
                const pkgData = JSON.parse(file.contents.toString());
                const prevVersion = pkgData.version;
                pkgData.version = inc(prevVersion, type);
                file.contents = Buffer.from(JSON.stringify(pkgData, null, 4));
                log(
                    "Bumped", log.colors.cyan(prevVersion),
                    "to", log.colors.magenta(pkgData.version),
                    "with type:", log.colors.cyan(type)
                );
                cb(null, file);
            }))
            .pipe(gulp.dest(p));
    }));
};

const taskNames = {
    postBuild: "postBuild",
    copyFiles: "copyFiles",
    pack: "pack",
    handleStyles: "handleStyles"
};

gulp.task(taskNames.handleStyles, function (cb) {
    logStart(taskNames.handleStyles);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        path.join(srcFolder, "scss/theme-*.scss")
    ])
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(gulp.dest(path.join(distFolder, "css")))
    .on("end", function () {
        console.info("Compiled folder", srcFolder);
        typeof cb === typeof isNaN && cb();
    });

    // COPY SCSS SOURCES
    gulp.src([
        path.join(srcFolder, "scss/*.scss")
    ])
    .pipe(gulp.dest(path.join(distFolder, "scss")));
    logEnd(taskNames.handleStyles);
    cb();
});

gulp.task(taskNames.copyFiles, (cb) => {
    logStart(taskNames.copyFiles);
    gulp.src([
        path.join(rootFolder, "changelog.md"),
        path.join(rootFolder, "README.md"),
        path.join(rootFolder, "tsbl.js")
    ])
    .pipe(gulp.dest(distFolder));
    logEnd(taskNames.copyFiles);
    cb();
});

gulp.task("bump:patch", () => {
    return doBump("patch");
});

gulp.task("bump:minor", () => {
    return doBump("minor");
});

gulp.task("bump:major", () => {
    return doBump("major");
});

// PACK
gulp.task(taskNames.pack, function (cb) {
    logStart(taskNames.pack);
    exec(`npm pack ./dist/${libName}`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        logEnd(taskNames.pack);
        cb(err);
    });
});

//MAIN
gulp.task(taskNames.postBuild, gulp.series(taskNames.handleStyles, taskNames.copyFiles, function (cb, err) {
    logEnd(taskNames.postBuild);
    cb(err);
}));
