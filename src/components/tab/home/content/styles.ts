// React & React Native
import {StyleSheet} from 'react-native';

// Internal Imports (Absolute)
import type {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      paddingTop: 8,
      paddingBottom: 24,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerContainer: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: colors.background,
    },
    headerTitle: {
      fontSize: 24,
      color: colors.gray[900],
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.gray[500],
    },
  });

export default createStyles;
