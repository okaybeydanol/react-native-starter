import {StyleSheet} from 'react-native';

// Types
import type {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
  });

export default createStyles;
