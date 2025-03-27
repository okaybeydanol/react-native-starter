// React & React Native
import {StyleSheet} from 'react-native';

// Internal Imports (Absolute)
import type {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      paddingTop: 20,
    },
    settingItem: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray[100],
    },
    settingText: {
      fontSize: 16,
      marginLeft: 16,
      color: colors.gray[900],
    },
  });

export default createStyles;
