import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactNativePlugin from "eslint-plugin-react-native";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";


const cleanGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        ...cleanGlobals,
        ...globals.node, 
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    rules: {
      "brace-style": ["error", "1tbs"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
    },
  },
];
