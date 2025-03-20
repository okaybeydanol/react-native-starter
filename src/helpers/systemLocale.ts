import {NativeModules, Platform} from 'react-native';

export function getSystemLocale(): string {
  try {
    // iOS
    if (Platform.OS === 'ios') {
      if (
        NativeModules.SettingsManager &&
        NativeModules.SettingsManager.getConstants &&
        NativeModules.SettingsManager.getConstants().settings &&
        NativeModules.SettingsManager.getConstants().settings.AppleLanguages
      ) {
        return NativeModules.SettingsManager.getConstants().settings
          .AppleLanguages[0];
      }
    }
    // Android
    else if (Platform.OS === 'android') {
      if (NativeModules.I18nManager && NativeModules.I18nManager.getConstants) {
        return NativeModules.I18nManager.getConstants().localeIdentifier;
      }
    }

    return 'tr-TR';
  } catch (error) {
    console.warn('Error getting system locale:', error);
    return 'tr-TR';
  }
}
