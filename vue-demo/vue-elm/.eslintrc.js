// // https://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   env: {
//     browser: true,
//   },
//   extends: [
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     'plugin:vue/essential',
//     // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//     'standard'
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'vue'
//   ],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }

module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "jasmine": true,
        "node": true
    },
    "globals": {
        "KindEditor": true,
        "MLBF": true,
        "$": true,
        "Zepto": true,
        "jQuery": true,
        "setImmediate": true,
        "ActiveXObject": true,
        "unescape": true,
        "escape": true
    },
    "rules": {
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": [2, {"checkLoops": false }],
        "no-control-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": [2, { "allowEmptyCatch": true }],
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": [2, { "skipComments": true, "skipStrings": true, "skipRegExps": true }],
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "valid-typeof": 2,
        "no-unsafe-finally": 2,
        "use-isnan": 2,
        "no-octal": 2,
        "no-fallthrough": [2, { "commentPattern": "break[\\s\\w]*omitted" }],
        "no-undef": [2, { "typeof": true }],
        "no-delete-var": 2,
        "eqeqeq": [2, "smart"],
        "no-eval": 2,
        "no-unneeded-ternary": 2,
        "no-native-reassign": 2,
        "no-new-wrappers": 2,
        "no-array-constructor": 2,
        "no-loop-func": 2,
        "quote-props": [2, "as-needed"],
        "no-with": 2,

        "curly": [2, "all"],
        "dot-notation": [2, {"allowKeywords": true, "allowPattern": "^catch$"}],
        "radix": 2,
        "no-else-return": 1,


        "guard-for-in": 1,
        "no-redeclare": [1, { "builtinGlobals": true }],
        "no-unused-vars": [1, {"vars": "local", "args": "none"}],


        "consistent-this": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-tabs": 2,
        "indent":  [2, 4, {"SwitchCase": 1}],
        "semi": [2, "always"],
        "max-statements": [1, 50],
        "max-params": [1, 6],
        "max-depth": [1, 6],
        "max-len": [1, 120, 4, {
            "ignoreUrls": true,
            "ignoreComments": true,
            "ignorePattern": "\\+ [\\w\\W]+>'"
        }],
        "max-nested-callbacks": [1, 4],

        "new-cap": [1, {"capIsNewExceptions": ["T", "AddToFavoritesBar"]}],
        "space-infix-ops": 1,
        "space-unary-ops": 1,
        "semi-spacing": 1,
        "no-multiple-empty-lines": [1, { "max": 2, "maxEOF": 1, "maxBOF": 1}],
        "no-nested-ternary": 1,
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
        "no-trailing-spaces": 1,
        "comma-spacing": [1, {"before": false, "after": true}],
        "eol-last": 1,
        "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}],
        "no-spaced-func": 1,
        "space-before-blocks": [1, "always"],
        "keyword-spacing": [1, { "before": true, "after": true}],
        "space-in-parens": [1, "never"],
        "operator-linebreak": [1, "before"],
        "object-curly-spacing": [1, "never"],
        "computed-property-spacing": [1, "never"],
        "array-bracket-spacing": [1, "never"],

        "line-comment-position": [1, { "position": "above" }],
        "valid-jsdoc": [1, {
            "prefer": {
                "arg": "param",
                "argument": "param",
                "returns": "return",
                "fileoverview": "file"
            },
            "requireReturn": false,
            "requireReturnDescription": false,
            "requireParamDescription": true
        }],
        "spaced-comment": [1, "always", {"exceptions": ["-", "+", ""]}]
    }

}
