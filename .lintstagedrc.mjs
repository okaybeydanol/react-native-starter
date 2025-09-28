export default {
  'src/**/*.{ts,tsx,js,jsx}': [
    'eslint --fix',
    'prettier --write',
    'node scripts/import-organizer.js',
  ],
  'src/**/*.{ts,tsx}': [() => 'tsc --noEmit'],
  'src/**/*.{json}': ['prettier --write'],
};
