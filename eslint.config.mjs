import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      'lines-between-class-members': ['error', 'always'],
    },
  },
];

export default eslintConfig;
