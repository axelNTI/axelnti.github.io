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
  theme: {},
});
