const {src, dest, watch} = require("gulp");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");

const bundleJs = () => {
    return src(["./public/src/Base/component.js", "./public/src/DropDownList/Base/**/*.js"])
        // .pipe(minifyJs())
        .pipe(concat("bundle.js"))
        .pipe(dest("./public/"));
}

const devWatch = () => {
    watch(["./public/src/Base/component.js", "./public/src/DropDownList/Base/**/*.js"], bundleJs);
}

exports.bundleJs = bundleJs;
exports.devWatch = devWatch;