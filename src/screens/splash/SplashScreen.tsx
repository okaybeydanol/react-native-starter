import React, {useEffect} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Images
import eterationLogo from '@assets/images/eteration-logo.png';

// Store
import {useLanguageStore} from '@query/store';

// Helpers
import {getSystemLocale} from '@helpers/systemLocale';

// Types
import type {SplashScreenProps} from './types';

// Styles
import createStyles from './styles';

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {i18n} = useTranslation();
  const language = useLanguageStore(state => state.language);
  const isHydrated = useLanguageStore(state => state._hasHydrated);
  const setLanguage = useLanguageStore(state => state.setLanguage);

  useEffect(() => {
    if (isHydrated) {
      if (language === '') {
        let languageCode = 'tr';
        let locale = getSystemLocale();
        const separator = Platform.OS === 'ios' ? '-' : '_';
        const localeParts = locale.split(separator);
        if (localeParts.length > 0 && localeParts[0]) {
          languageCode = localeParts[0];
        }
        setLanguage(languageCode);
      } else {
        i18n.changeLanguage(language);
      }

      const timer = setTimeout(() => {
        navigation.replace('TabNavigator', {screen: 'HomeScreen'});
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isHydrated]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={eterationLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>We Are Your Custom Software Experts</Text>
          <Text style={styles.description}>
            In the fast evolving world of today’s business, ETERATION creates
            solutions and services that enable companies stay ahead of
            competition in ever changing markets.
          </Text>
        </View>
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          © Copyright Brainstorming 2025. All rights reserved.
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
