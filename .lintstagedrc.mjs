export default {
  'src/**/*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc --noEmit',
    'node scripts/import-organizer.js',
  ],
  'src/**/*.{js,jsx}': [
    'eslint --fix',
    'prettier --write',
    'node scripts/import-organizer.js',
  ],
  'src/**/*.{json}': ['prettier --write'],
};
