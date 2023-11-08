"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const {task, dest, src, series} = require("gulp"),
    {join} = require("path"),
    exec = require("child_process").exec,
    sass = require("gulp-sass")(require("sass")),
    {inc} = require("semver"),
    log = require("plugin-log"),
    {obj} = require("through2")
;const gulp = require("gulp");

const libName = "ngx-popperjs";
const rootFolder = join(__dirname);
const srcFolder = join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = join(rootFolder, `dist/${libName}`);

const doBump = (type) => {
    return Promise.all(["./", join(rootFolder, "projects", libName)].map((p) => {
        return src(join(p, "package.json"))
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
            .pipe(dest(p));
    }));
};

//

task("bump:patch", () => {
    return doBump("patch");
});

task("bump:minor", () => {
    return doBump("minor");
});

task("bump:major", () => {
    return doBump("major");
});

gulp.task("bump:beta", () => {
    return doBump("prerelease", "beta");
});

task("build++", () => {
    return gulp.src(join(__dirname, "package.json"))
        .pipe(obj((file, enc, cb) => {
            const pkgData = JSON.parse(file.contents.toString());
            const prevBuild = pkgData.build;
            pkgData.build++;
            file.contents = Buffer.from(JSON.stringify(pkgData, null, 4));
            log(
                "Increased", log.colors.cyan(prevBuild),
                "to", log.colors.magenta(pkgData.build)
            );
            cb(null, file);
        }))
        .pipe(dest(__dirname));
});

task("handleStyles", () => {
    logStart("handleStyles");

    const buildScss = new Promise((resolve, reject) => {
        // SASS BUILD SCSS SOURCES
        gulp.src([join(srcFolder, "scss/theme-*.scss")])
            .pipe(sass({
                outputStyle: "expanded"
            }))
            .pipe(gulp.dest(join(distFolder, "css")))
            .on("error", reject)
            .on("end", resolve);
    });

    const copyScss = new Promise((resolve, reject) => {
        src([join(srcFolder, "scss/*.scss")])
            .pipe(dest(join(distFolder, "scss")))
            .on("error", reject)
            .on("end", resolve);
    });

    const copyScssIndex = new Promise((resolve, reject) => {
        src([join(srcFolder, "_index.scss")])
            .pipe(dest(distFolder))
            .on("error", reject)
            .on("end", resolve);
    });

    return Promise.all([buildScss, copyScss, copyScssIndex])
        .then(() => logEnd("handleStyles"))
        .catch(console.error);
});

task("copyFiles", (cb) => {
    logStart("copyFiles");
    src([join(rootFolder, "changelog.md"), join(rootFolder, "README.md"), join(rootFolder, "tsbl.js")])
        .pipe(dest(distFolder))
        .on("error", cb)
        .on("end", () => {
            logEnd("copyFiles");
            cb();
        });
});

// PACK
task("pack", (cb) => {
    logStart("pack");
    exec(`npm pack ./dist/${libName}`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        logEnd("pack");
        cb(err);
    });
});

//MAIN
task("postBuild", series("handleStyles", "copyFiles", function (cb, err) {
    logEnd("postBuild");
    cb(err);
}));
