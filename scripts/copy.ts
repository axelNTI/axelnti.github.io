import { copyFileSync } from "node:fs";

const main = () => {
  copyFileSync("dist/index.html", "dist/404.html");
};

main();
