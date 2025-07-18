import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // disables ESLint rules that conflict with Prettier
  {
    files: ['**/*.ts'],
    ignores: ['dist', 'node_modules', '.env', '.vscode', '*.log'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
