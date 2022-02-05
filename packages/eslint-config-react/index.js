// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "cypress", "jest", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
    "@typescript-eslint/no-empty-interface": 2,
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
};
