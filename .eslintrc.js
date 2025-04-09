module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  plugins: ['import', 'prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern:
              '@(app|components|constants|hooks|i18n|navigation|store|query|theme|types|utils)/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@assets/*',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
