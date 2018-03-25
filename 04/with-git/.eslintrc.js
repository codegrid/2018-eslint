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
      "prettier"
    ],
    "plugins": ["node", "prettier"],
    "rules": {
        "node/no-unsupported-features": [
            "error", { "version": 7.6 }
        ],
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "semi": true,
            "tabWidth": 2
          }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ]
    }
};
