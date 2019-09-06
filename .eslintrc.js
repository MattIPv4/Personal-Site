module.exports = {
    "env": {
        "browser": true,
        "es6": false
    },
    "extends": "eslint:recommended",
    "rules": {
        "camelcase": "error",
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "eol-last": "error",
        "indent": [
            "error",
            4
        ],
        "no-extra-parens": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "consistent": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": false
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "yoda": [
            "error",
            "never"
        ],
    }
};
