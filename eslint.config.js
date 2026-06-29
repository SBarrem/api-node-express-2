import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "linebreak-style": ["error", "windows"],
      "no-unused-vars": "off"
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly"
      }
    }
  }
];