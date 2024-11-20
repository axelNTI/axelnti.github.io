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
const dotenv = require("dotenv");
const path = require("path");

const handlebarsHelpers = require("./src/helpers/handlebars");

dotenv.config({ path: path.join(__dirname, ".env") });

const spotifyCredentials = {
   clientId: process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   refreshToken: process.env.REFRESH_TOKEN,
};

const getAccessToken = async () => {
   const url = new URL("https://accounts.spotify.com/api/token");
   const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`).toString("base64")}`,
   };

   const body = new URLSearchParams({
      grant_type: "refresh_token", // Use 'refresh_token' to get a new access token with required scopes
      refresh_token: spotifyCredentials.refreshToken,
      client_id: spotifyCredentials.clientId,
      scope: "user-read-recently-played user-top-read", // Add the necessary scopes here
   });

   const response = await fetch(url, {
      method: "POST",
      headers,
      body,
   });

   const data = await response.json();
   if (!response.ok) {
      console.error("Error fetching access token:", data.error_description || data);
      throw new Error(data.error || "Failed to get tokens");
   }

   return data.access_token;
};

const getSpotifyData = async (url, parameters = {}) => {
   const accessToken = await getAccessToken(); // Ensure the token is fresh with required scopes
   const headers = {
      Authorization: `Bearer ${accessToken}`,
   };

   // Construct query string from parameters
   const queryParams = new URLSearchParams(parameters).toString();
   const fullUrl = queryParams ? `${url}?${queryParams}` : url;

   const response = await fetch(fullUrl, {
      headers,
   });
   const data = await response.json();
   if (!response.ok) {
      console.error("Error fetching Spotify data:", data);
      throw new Error(data.error || "Failed to get Spotify data");
   }
   return data.items; // Return the data
};

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
                  recursivelyOptimizeBlocks: true,
                  removeDuplicateMediaQueries: true,
               },
            },
            compatibility: "*",
         })
      )
      .pipe(gulp.dest("./dist/css"))
      .pipe(
         tap((file) => {
            const relativePath = path.relative("./dist/css", file.path);
            if (
               !fs
                  .readFileSync("./src/index.hbs", "utf8")
                  .includes(relativePath)
            ) {
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

gulp.task("handlebars", async () => {
   return gulp
      .src("./src/index.hbs")
      .pipe(
         through2.obj(async (file, _, cb) => {
            Object.keys(handlebarsHelpers).forEach((helperName) => {
               handlebars.registerHelper(helperName, handlebarsHelpers[helperName]);
            });
            const locale = yaml.load(fs.readFileSync("./src/locale/en.yml", "utf8"));
            const data = yaml.load(fs.readFileSync("./src/data/data.yml", "utf8"));
            const recentlyPlayedTracks = (
               await getSpotifyData("https://api.spotify.com/v1/me/player/recently-played", {
                  limit: 50,
               })
            )
               .filter((item, index, self) => self.findIndex((track) => track.track.id === item.track.id) === index)
               .slice(0, 5)
               .map((item) => item.track);
            const topTracks = await getSpotifyData("https://api.spotify.com/v1/me/top/tracks", {
               time_range: "short_term",
               limit: 5,
            });
            const topArtists = await getSpotifyData("https://api.spotify.com/v1/me/top/artists", {
               time_range: "short_term",
               limit: 5,
            });
            const template = handlebars.compile(file.contents.toString());
            file.contents = Buffer.from(
               template({
                  locale,
                  data,
                  recentlyPlayedTracks,
                  topTracks,
                  topArtists,
               })
            );
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
