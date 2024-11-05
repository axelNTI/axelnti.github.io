const gulp = require("gulp");

const scss = require("./scss");

gulp.task("compileSCSS", scss.compileSCSS);
gulp.task("watchSCSS", scss.watchSCSS);

const defaultTask = gulp.series("compileSCSS", "watchSCSS");

gulp.task("default", defaultTask);
