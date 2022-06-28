"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    {join} = require("path"),
    exec = require("child_process").exec,
    sass = require("gulp-sass"),
    bump = require("gulp-bump")
;

const libName = "ngx-popperjs";
const rootFolder = join(__dirname);
const libFolder = join(rootFolder, `projects/${libName}`);
const srcFolder = join(libFolder, `src/lib`);
const distFolder = join(rootFolder, `dist/${libName}`);
const doBump = (type) => {
    return Promise.all(["./", libFolder].map((p) => {
        return gulp.src(join(p, "package.json"))
        .pipe(bump({type}))
        .pipe(gulp.dest(p));
    }));
};

const taskNames = {
    postBuild: "postBuild",
    copyFiles: "copyFiles",
    pack: "pack",
    handleStyles: "handleStyles"
};

// TASKS

gulp.task("bump:patch", () => {
    return doBump("patch");
});

gulp.task("bump:minor", () => {
    return doBump("minor");
});

gulp.task("bump:major", () => {
    return doBump("major");
});

gulp.task(taskNames.handleStyles, function (cb) {
    logStart(taskNames.handleStyles);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        join(srcFolder, "scss/theme-*.scss")
    ])
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(gulp.dest(join(distFolder, "css")))
    .on("end", function () {
        console.info("Compiled folder", srcFolder);
        typeof cb === typeof isNaN && cb();
    });

    // COPY SCSS SOURCES
    gulp.src([
        join(srcFolder, "scss/*.scss")
    ])
    .pipe(gulp.dest(join(distFolder, "scss")));
    logEnd(taskNames.handleStyles);
    cb();
});

gulp.task(taskNames.copyFiles, (cb) => {
    logStart(taskNames.copyFiles);
    gulp.src([
        join(rootFolder, "changelog.md"),
        join(rootFolder, "README.md"),
        join(rootFolder, "tsbl.js")
    ])
    .pipe(gulp.dest(distFolder));
    logEnd(taskNames.copyFiles);
    cb();
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
