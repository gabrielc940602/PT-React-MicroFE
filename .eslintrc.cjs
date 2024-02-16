const prettierConfig = require('./.prettierrc.cjs');

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'ecosystem.config.cjs', 'webpack'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./src/client/tsconfig.json', './src/server/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['simple-import-sort', 'hooks'],
    rules: {

        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/semi': ["error", "always"],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-use-before-define': ['error', { functions: false }],
        'prefer-destructuring': 'error',
        'react/react-in-jsx-scope': 'off',
        'max-len': ['error', { 'code': 140, 'ignoreComments': true, 'ignorePattern': '^import .*', "ignoreTemplateLiterals": true }],
        'max-lines': ['error', 100],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "hooks/sort": [
            2,
            {
                "groups": [
                    "useState",
                    "useReducer",
                    "useContext",
                    "useRef",
                    "useMemo",
                    "useDispatch",
                    "useCallback",
                    "useEffect"
                ]
            }
        ],
        'prettier/prettier': [
            'error', prettierConfig
        ],
    },
}
