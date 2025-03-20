import {StyleSheet} from 'react-native';

// Types
import type {AppTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/typography';
import {windowHeight, windowWidth} from '@constants/dimensions';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: windowWidth * 1.3,
      height: windowHeight * 0.6,
      backgroundColor: colors.splashBackground,
      borderBottomLeftRadius: 300,
      borderBottomRightRadius: 300,
    },
    logo: {
      width: 150,
      height: 150,
    },
    textContainer: {
      marginTop: 50,
      backgroundColor: colors.background,
    },
    title: {
      color: colors.text,
      fontFamily: fontFamily.bold,
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontFamily: fontFamily.medium,
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
      fontFamily: fontFamily.medium,
      color: colors.text,
      fontSize: 12,
      textAlign: 'center',
    },
  });

export default createStyles;
