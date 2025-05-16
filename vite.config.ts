import { resolve } from "node:path";
import preact from "@preact/preset-vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
      },
    }),
    Sitemap({
      hostname: "https://axel.thornberg.se/",
    }),
  ],
  build: {
    minify: "terser",
    target: "esnext",
  },
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
