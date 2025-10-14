module.exports = {
    env: {
        node: true,

        commonjs: true,

        browser: true,

        es2021: true,
    },

    parserOptions: {
        ecmaVersion: 12,
    },

    extends: ['prettier', 'airbnb-base'],

    plugins: ['prettier'],

    rules: {
        'no-console': 0,

        indent: 0,

        'linebreak-style': 0,

        'operator-linebreak': 'off',

        'multiline-ternary': 'off',

        'prettier/prettier': [
            'error',

            {
                trailingComma: 'es5',

                singleQuote: true,

                printWidth: 100,

                tabWidth: 4,

                semi: true,

                bracketSpacing: true,

                endOfLine: 'lf',
            },
        ],
    },
};
