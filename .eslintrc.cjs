module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.spec.tsx"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react", "prettier", "react-hooks", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
  },
};
