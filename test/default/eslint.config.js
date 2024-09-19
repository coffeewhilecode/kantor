import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
  {
    ignores: ["**/build/**", "**/dist/**"],
  },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
);
