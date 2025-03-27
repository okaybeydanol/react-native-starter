module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@__tests__': './__tests__',
          '@assets': './src/assets',
          '@features': './src/features',
          '@components': './src/core/components',
          '@constants': './src/core/constants',
          '@helpers': './src/core/helpers',
          '@hooks': './src/core/hooks',
          '@i18n': './src/core/i18n',
          '@navigation': './src/core/navigation',
          '@store': './src/core/store',
          '@theme': './src/core/theme',
          '@types': './src/core/types',
          '@utils': './src/core/utils',
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
