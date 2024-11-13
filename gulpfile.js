const gulp = require("gulp");
const sass = require("sass");
const cleanCSS = require("gulp-clean-css");
const through2 = require("through2");
const fs = require("fs");
const tap = require("gulp-tap");
const handlebars = require("handlebars");
const yaml = require("js-yaml");
const htmlMinifier = require("gulp-htmlmin");
const purgecss = require("gulp-purgecss");

const handlebarsHelpers = require("./src/helpers/handlebars");

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
      .pipe(
         purgecss({
            content: ["./src/index.hbs"],
         })
      )
      .pipe(
         cleanCSS({
            level: {
               2: {
                  all: true,
                  restructureRules: true,
               },
            },
            compatibility: "*",
         })
      )
      .pipe(gulp.dest("./dist/css"))
      .pipe(
         tap((file) => {
            if (fs.statSync(file.path).size === 0) {
               fs.unlinkSync(file.path);
            }
         })
      )
      .pipe(
         tap(() => {
            console.clear();
         })
      );
});

gulp.task("scss:watch", () => {
   gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
});

gulp.task("handlebars", () => {
   return gulp
      .src("./src/index.hbs")
      .pipe(
         through2.obj((file, _, cb) => {
            Object.keys(handlebarsHelpers).forEach((helperName) => {
               handlebars.registerHelper(helperName, handlebarsHelpers[helperName]);
            });
            const locale = yaml.load(fs.readFileSync("./src/locale/en.yml", "utf8"));
            const data = yaml.load(fs.readFileSync("./src/data/data.yml", "utf8"));
            const template = handlebars.compile(file.contents.toString());
            file.contents = Buffer.from(template({ locale, data }));
            file.path = file.path.replace(/\.hbs$/, ".html");
            cb(null, file);
         })
      )
      .pipe(
         htmlMinifier({
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeEmptyElements: true,
            removeOptionalTags: true,
            removeAttributeQuotes: true,
         })
      )
      .pipe(gulp.dest("./dist"))
      .pipe(
         tap(() => {
            console.clear();
         })
      );
});

gulp.task("handlebars:watch", () => {
   gulp.watch("./src/index.hbs", gulp.series("handlebars"));
});

gulp.task("yml:watch", () => {
   gulp.watch("./src/**/*.yml", gulp.series("handlebars"));
});

gulp.task("build", gulp.parallel("scss", "handlebars"));

gulp.task("default", gulp.parallel("scss", "scss:watch", "handlebars", "handlebars:watch", "yml:watch"));
