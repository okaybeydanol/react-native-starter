// React & React Native
import { NativeModules, Platform } from 'react-native';

export function getSystemLocale(): string {
  try {
    let locale = 'en';

    // iOS
    if (Platform.OS === 'ios') {
      locale =
        NativeModules.SettingsManager?.getConstants?.()?.settings
          ?.AppleLanguages?.[0] || locale;
    }
    // Android
    else if (Platform.OS === 'android') {
      locale =
        NativeModules.I18nManager?.getConstants?.()?.localeIdentifier || locale;
    }

    const separator = Platform.OS === 'ios' ? '-' : '_';
    const localeParts = locale.split(separator);

    return localeParts[0] || 'en';
  } catch (error) {
    console.warn('Error getting system locale:', error);
    return 'en';
  }
}
