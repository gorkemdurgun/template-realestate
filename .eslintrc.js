/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    // no unused vars
    '@typescript-eslint/no-unused-vars': 'warn',
    // any type
    '@typescript-eslint/no-explicit-any': 'off',
    // jsx scope
    'react/react-in-jsx-scope': 'off',
    // ban ts comment
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
