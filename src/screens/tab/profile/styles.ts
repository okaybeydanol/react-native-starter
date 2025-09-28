// React & React Native
import { StyleSheet } from 'react-native';

// Internal Imports (Absolute)
import type { AppTheme } from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.text,
    },
  });

export default createStyles;
