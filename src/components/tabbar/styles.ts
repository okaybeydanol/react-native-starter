// React & React Native
import { StyleSheet } from 'react-native';

// Internal Imports (Absolute)
import { TAB_BAR_HEIGHT } from '@constants/dimensions';
import type { AppTheme } from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: TAB_BAR_HEIGHT,
      borderTopWidth: 0.2,
      borderTopColor: colors.gray[300],
    },
  });

export default createStyles;
