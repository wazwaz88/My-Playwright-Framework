module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'max-len': [
            'error',
            {code: 120, 
            ignoreComments: true, 
            ignoreStrings: true}
        ],
        'no-under': 'off',
        'no-unused-vars': ['error', 
                { 
                    'vars': 'all', 
                    'args': 'after-used', 
                    'ignoreRestSiblings': false,
                    'caughtErrors': 'none'
                }
            ]
    }
}