module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@__tests__': './__tests__',
          '@assets': './assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@App': './src/App.tsx',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
