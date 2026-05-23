var gulp = require("gulp");
var babel = require("gulp-babel");
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");
var uglify = require("gulp-uglify");
var util = require("gulp-util");
var mocha = require("gulp-mocha");
var todo = require("gulp-todo");
var webpack = require("webpack-stream");
var fs = require("fs");
var rev = require("gulp-rev");
var replace = require("gulp-rev-replace");    
var clean = require("gulp-rev-dist-clean");
var rimraf = require('rimraf');

gulp.task("clear-bin", function (cb) {
    rimraf.sync('bin');
    console.log('Old bin folder cleared.');
    cb();
});  

gulp.task("build-server-only", function () {
    return gulp.src(["src/server/**/*.*", "src/server/**/*.js"])
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(gulp.dest("bin/server/"));
});

gulp.task("move-client-only", function () {
    return gulp.src(["src/client/**/*.*", "!src/client/js/*.js"])
        .pipe(gulp.dest("bin/client/"));
});

gulp.task("compile-client-only", function () {
    return gulp.src(["src/client/js/app.js"])
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(babel({
            presets: [
            ["@babel/preset-env", { "modules": false }]
            ]
        }))
        .pipe(gulp.dest("bin/client/js/"));
});

gulp.task("rev-rename-only", function () {
    return gulp.src(["bin/client/**/*.html",
                "bin/client/**/*.css",
                "bin/client/**/*.js",
                "bin/client/**/*.json",
                "bin/client/**/*.{jpg,png,jpeg,gif,svg}"])
        .pipe(rev())
        .pipe(gulp.dest("bin/client/"))
        .pipe(rev.manifest({ path: "manifest.json" }))
        .pipe(gulp.dest("bin/manifest/"));
});

gulp.task("rev-replace-only", function () {
    return gulp.src("bin/client/**/*.{css,js,html}")
        .pipe(replace({ manifest: gulp.src("bin/manifest/manifest.json"), }))
        .pipe(gulp.dest("bin/client/"));
});

gulp.task('rev-clean-only', function () {
    return gulp.src(['bin/client/**/*'], {read: false})
        .pipe(clean('bin/manifest/manifest.json'));
});

gulp.task("build-client", gulp.series(
    "move-client-only", 
    "compile-client-only", 
    "rev-rename-only", 
    "rev-replace-only", 
    "rev-clean-only"
));

gulp.task("build-server", gulp.series("build-server-only"));

gulp.task("move-config", gulp.series("clear-bin", function () {
    return gulp.src(["config.json"])
        .pipe(gulp.dest("bin/"));
}));

gulp.task("build", gulp.series("clear-bin", gulp.parallel("build-client", "build-server", "move-config")));   

gulp.task("run", gulp.series("build", function (cb) {
    nodemon({
        delay: 2000,
        script: "./server/server.js",
        cwd: "./bin/",
        args: ["config.json"],
        ext: "html js css",
        ignore: ["config.json"]
    })
    .on("restart", function () {
        util.log("server restarted!");
    });
    cb();
}));

gulp.task("default", gulp.series("run"));
