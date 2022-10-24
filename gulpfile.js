const {src, dest, watch} = require("gulp");
const gulp = require("gulp");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");
var exec = require('child_process').exec;
const sass = require('gulp-sass')(require('sass'));
const shelljs = require("shelljs");
const runsequence = require("run-sequence");

const bundleJs = () => {
    return src(["./public/src/Base/component.js", "./public/src/DropDownList/Base/**/*.js"])
        // .pipe(minifyJs())
        .pipe(concat("bundle.js"))
        .pipe(dest("./public/"));
}

const devWatch = () => {
    watch(["./public/src/Base/component.js", "./public/src/DropDownList/Base/**/*.js"], bundleJs);
}

function generateCSS(cb) {
    shelljs.exec("gulp fontawesome-webfont");
    src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/src'));
    cb();
}

gulp.task("fontawesome-webfont", function (cb) {
    src('./src/styles/fontawesome/webfonts/*')
        .pipe(dest('./dist/src/styles/fontawesome/webfonts'));
    cb();
})

gulp.task('build', function (cb) {
    shelljs.exec("gulp css");
    exec('cd src && tsc', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function (cb) {
    shelljs.exec("gulp css");
    exec("cd src && tsc -w", function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
});

exports.bundleJs = bundleJs;
exports.devWatch = devWatch;
exports.css = generateCSS;