// React & React Native
import { NativeModules, Platform } from 'react-native';

export function getSystemLocale(): string {
  try {
    let locale = 'en';

    // iOS
    if (Platform.OS === 'ios') {
      if (
        NativeModules.SettingsManager &&
        NativeModules.SettingsManager.getConstants &&
        NativeModules.SettingsManager.getConstants().settings &&
        NativeModules.SettingsManager.getConstants().settings.AppleLanguages
      ) {
        locale =
          NativeModules.SettingsManager.getConstants().settings
            .AppleLanguages[0];
      }
    }
    // Android
    else if (Platform.OS === 'android') {
      if (NativeModules.I18nManager && NativeModules.I18nManager.getConstants) {
        locale = NativeModules.I18nManager.getConstants().localeIdentifier;
      }
    }

    const separator = Platform.OS === 'ios' ? '-' : '_';
    const localeParts = locale.split(separator);
    if (localeParts.length > 0 && localeParts[0]) {
      locale = localeParts[0];
    }

    return locale;
  } catch (error) {
    console.warn('Error getting system locale:', error);
    return 'en';
  }
}
