// React & React Native
import {StyleSheet} from 'react-native';

// Internal Imports (Absolute)
import {WINDOW_WIDTH} from '@constants/dimensions';
import type {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
      paddingHorizontal: 16,
      borderBottomColor: colors.gray[100],
      borderBottomWidth: 1,
      paddingVertical: 4,
    },
    imageContainer: {
      width: 85,
      height: 85,
      borderRadius: 4,
      overflow: 'hidden',
      marginRight: 24,
      backgroundColor: colors.gray[50],
    },
    image: {
      width: '100%',
      height: '100%',
    },
    infoContainer: {
      width: WINDOW_WIDTH - 140,
    },
    textContainer: {
      justifyContent: 'center',
    },
    name: {
      fontSize: 15,
      color: colors.gray[800],
      marginBottom: 4,
    },
    department: {
      fontSize: 17,
      color: colors.gray[900],
      marginBottom: 8,
    },
    bottomViewContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    age: {
      fontSize: 15,
      color: colors.gray[900],
    },
    viewProfileButton: {
      alignSelf: 'flex-end',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      backgroundColor: colors.background,
    },
    viewProfile: {
      color: colors.splashBackground,
      fontSize: 16,
    },
  });

export default createStyles;
