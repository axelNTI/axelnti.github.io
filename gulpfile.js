const gulp = require("gulp");
const sass = require("sass");
const cleanCSS = require("gulp-clean-css");
const through2 = require("through2");
const fs = require("fs");
const tap = require("gulp-tap");

gulp.task("scss", () => {
   return gulp
      .src("./src/scss/**/*.scss")
      .pipe(
         through2.obj((file, _, cb) => {
            const result = sass.compile(file.path);
            file.contents = Buffer.from(result.css);
            file.path = file.path.replace(/\.scss$/, ".css");
            cb(null, file);
         })
      )
      .pipe(cleanCSS())
      .pipe(gulp.dest("./dist/css"))
      .pipe(
         tap((file) => {
            if (fs.statSync(file.path).size === 0) {
               fs.unlinkSync(file.path);
            }
         })
      );
});

gulp.task("scss:watch", () => {
   gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
});

gulp.task("default", gulp.parallel("scss", "scss:watch"));
