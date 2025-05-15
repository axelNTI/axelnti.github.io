import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons(), presetTypography(), presetWebFonts()],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
  theme: {
    animation: {
      keyframes: {
        float: "{0%{transform:translateY(0px)}50%{transform:translateY(-20px)}100%{transform:translateY(0px)}}",
      },
      durations: {
        float: "3s",
      },
      timingFns: {
        float: "ease-in-out",
      },
      counts: {
        float: "infinite",
      },
    },
  },
});
