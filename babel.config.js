module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@__tests__': './__tests__',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@app': './src/App.tsx',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: false,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
