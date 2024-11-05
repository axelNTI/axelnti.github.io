const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const compileSCSS = () => {
    return gulp.src("src/scss/**/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
};

const watchSCSS = () => {
    gulp.watch("src/scss/**/*.scss", compileSCSS);
};

module.exports = {
    compileSCSS,
    watchSCSS,
};
