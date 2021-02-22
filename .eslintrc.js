module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "jest"],
  rules: {
    "no-shadow": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-shadow": "error",
    "prettier/prettier": ["error"],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-use-before-define": "warn",
    "no-nested-ternary": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
};
