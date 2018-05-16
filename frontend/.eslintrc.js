// module.exports = {
//   "extends": "airbnb-base",
//   // "extends": ["eslint:recommended", "plugin:react/recommended"],
//   "parser": "babel-eslint"
// };

module.exports = {  
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "plugin:prettier/recommended"
  ]
};