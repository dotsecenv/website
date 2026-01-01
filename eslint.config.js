import js from "@eslint/js";
import * as mdx from "eslint-plugin-mdx";

export default [
  js.configs.recommended,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.mdx"],
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
];
