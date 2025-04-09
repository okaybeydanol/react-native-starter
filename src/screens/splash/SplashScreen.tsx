// React & React Native
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import {getSystemLocale} from '@helpers/systemLocale';
import {useLanguageStore} from '@query/store/slices/languageSlice';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {SplashScreenProps} from './types';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {i18n} = useTranslation();
  const {setLanguage, language, _hasHydrated} = useLanguageStore();

  useEffect(() => {
    if (_hasHydrated) {
      const languageCode = getSystemLocale();

      if (language === '') {
        setLanguage(languageCode);
        i18n.changeLanguage(languageCode);
      } else {
        i18n.changeLanguage(language);
      }

      const timer = setTimeout(() => {
        navigation.replace('TabNavigator', {screen: 'HomeScreen'});
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [_hasHydrated]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Logo</Text>
          </View>
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
          © Copyright Okay BEYDANOL 2025. All rights reserved.
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
