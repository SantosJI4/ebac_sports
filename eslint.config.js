import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  js.config({
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {}
  }),
  ...tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    rules: {}
  })
]
