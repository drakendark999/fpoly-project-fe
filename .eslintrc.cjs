module.exports = {
  env: { browser: true, amd: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-explicit-any': ['off'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/typescript-estree/warning-on-unsupported-type-versions':
      'off',
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
