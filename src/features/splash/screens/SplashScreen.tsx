// React & React Native
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import eterationLogo from '@assets/images/eteration-logo.png';
import {setLanguage} from '@features/settings/screens/language/slices/languageSlice';
import {getSystemLocale} from '@helpers/systemLocale';
import {useAppDispatch, useAppSelector} from '@store/store';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {SplashScreenProps} from './types';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {i18n} = useTranslation();
  const language = useAppSelector(state => state.language.language);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const languageCode = getSystemLocale();

    if (language === '') {
      dispatch(
        setLanguage({
          language: languageCode,
        }),
      );
      i18n.changeLanguage(languageCode);
    } else {
      i18n.changeLanguage(language);
    }

    const timer = setTimeout(() => {
      navigation.replace('TabNavigator', {screen: 'HomeScreen'});
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
