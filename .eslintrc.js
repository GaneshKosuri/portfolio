module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier.
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        'import',
        'prettier', // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // React 17 no longer requires React to be in scope.
        'no-unused-vars': 'warn', // Change this to 'error' if you want to enforce it more strictly.
        'prettier/prettier': 'warn', // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking.
        'react/jsx-uses-react': 'off', // React 17 no longer requires React to be in scope.
        'react/jsx-uses-vars': 'warn', // Prevent variables used in JSX to be incorrectly marked as unused.
        'import/order': ['warn', {
            'groups': [['builtin', 'external', 'internal']],
            'newlines-between': 'always',
        }],
        'jsx-a11y/anchor-is-valid': 'off', // This rule is too strict for Next.js
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version.
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
