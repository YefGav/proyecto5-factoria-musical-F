module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
      'vitest/globals': true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'vitest'],
    rules: {
      'prettier/prettier': 'error',
    },
  };
