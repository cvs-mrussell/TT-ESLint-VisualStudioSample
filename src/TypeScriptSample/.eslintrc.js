module.exports = {
    "env": {
        "node": true,
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "extends": [
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/promise-function-async": [
            "error",
            {
                "allowedPromiseNames": ["Thenable", "AxiosResponse"],
                "checkArrowFunctions": true,
                "checkFunctionDeclarations": true,
                "checkFunctionExpressions": true,
                "checkMethodDeclarations": true
            }
        ],
        "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/indent": ["error", 4], // Airbnb deviation
        "@typescript-eslint/interface-name-prefix": "always",
        "@typescript-eslint/semi": ["always", "error"],
        "@typescript-eslint/no-inferrable-types": [
            "error", "always",
            {
                "ignoreParameters": true,
                "ignoreProperties": true
            }
        ],
        "unicode-bom": "off",
        "eol-last": ["error", "never"], // Airbnb deviation
        "linebreak-style": ["error", "windows"],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "semi": "off", // Prefer the eslint-typescript rule
        "space-before-function-paren": ["error", "never"], // Airbnb deviation
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        "require-await": "error",
        "jsx-a11y/label-has-for": "off", // deprecated
        "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true }],
        "react/jsx-indent": ["error", 4], // Airbnb deviation
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx", ".tsx"
                ]
            }
        ],
        "react/jsx-indent-props": [ // Airbnb deviation
            "error",
            4
        ],
        "react/jsx-one-expression-per-line": ["on", { "allow": "literal" }]
    }
};