module.exports = {
    "parserOptions": {
      "ecmaVersion": 2017
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:node/recommended",
      "plugin:prettier/recommended"
    ],
    "plugins": ["node"],
    "rules": {
        "node/no-unsupported-features": [
            "error", { "version": 7.6 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "prettier/prettier": [
          "error",
          {
            "printWidth": 100,
            "singleQuote": true,
            "tabWidth": 4
          }
        ]
      }
};
