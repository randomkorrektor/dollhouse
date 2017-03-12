module.exports = {
    "env": {
        "node": true,
        "mocha": true,
        "mongo": true
    },
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "plugins": [
        "import"
    ],
    "rules": {
        "comma-dangle": 0,
        "no-restricted-syntax": 1,
        "new-cap": 1,
        "no-continue": 1,
        "no-underscore-dangle": 1,
        "global-require": 1,
        "react/no-multi-comp": 0,
        "react/jsx-filename-extension": 0,
        "camelcase": 1,
        "import/no-unresolved": 1,
        "import/prefer-default-export": 1,
        "import/extensions": 1,
        "no-return-assign": 1,
        "max-len": 1,
        "linebreak-style": 0,
        indent: 0,
        "no-unused-vars": 1,
        "key-spacing": 1,
        "eol-last": 1,
        "object-curly-spacing": 1,
        "comma-spacing": 1
    }
};