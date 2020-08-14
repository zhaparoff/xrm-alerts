module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",    
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/restrict-plus-operands": "off"
  },
  overrides: [
    {
      "files": ["src/typings/**/*.*"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
}
