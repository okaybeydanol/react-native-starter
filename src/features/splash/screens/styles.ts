// React & React Native
import {StyleSheet} from 'react-native';

// Internal Imports (Absolute)
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/dimensions';
import type {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: WINDOW_WIDTH * 1.3,
      height: WINDOW_HEIGHT * 0.6,
      backgroundColor: colors.splashBackground,
      borderBottomLeftRadius: 300,
      borderBottomRightRadius: 300,
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    logoText: {
      color: colors.text,
      fontSize: 24,
    },
    textContainer: {
      marginTop: 50,
      backgroundColor: colors.background,
    },
    title: {
      color: colors.text,
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      color: colors.text,
      fontSize: 12,
      textAlign: 'center',
      paddingHorizontal: 40,
    },
    copyrightContainer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyrightText: {
      color: colors.text,
      fontSize: 12,
      textAlign: 'center',
    },
  });

export default createStyles;
