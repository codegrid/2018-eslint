module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
      "es6": true,
      "node": true
  },
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "plugins": ["node"],
  "rules": {
      "node/no-unsupported-features": [
        "error", { "version": 7.6 }
      ],
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
};
