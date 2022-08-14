import { defineConfig } from "vite";
import postcssLit from "rollup-plugin-postcss-lit";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  base: "./",
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 1 })],
    },
  },
  plugins: [postcssLit({ include: ["**/*.css?*"] })],
  test: {
    coverage: {
      provider: "istanbul",
    },
    environment: "happy-dom",
    globals: true,
    setupFiles: "./setupTests/setup.js",
  },
});
