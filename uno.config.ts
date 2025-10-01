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
    colors: {
      background: "#f0f0f6",
      text: "#202020",
      card: "#fff",
      primary: "#3b82f6",
      secondary: "#10b981",
      accent: "#8b5cf6",
      footer: "#e9e9ec",
    },
  },
});
