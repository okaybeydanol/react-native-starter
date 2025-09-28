// React & React Native
import { StyleSheet } from 'react-native';

// Internal Imports (Absolute)
import type { AppTheme } from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
  });

export default createStyles;
