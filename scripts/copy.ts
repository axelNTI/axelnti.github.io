import { copyFileSync } from "node:fs";

const main = () => {
  try {
    copyFileSync("dist/index.html", "dist/404.html");
  } catch (e) {
    console.error(`Error copying 404 html file: ${e}`);
    process.exit(1);
  }
};

main();
