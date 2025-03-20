import {StyleSheet} from 'react-native';

// Types
import type {AppTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/typography';

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
      fontFamily: fontFamily.bold,
    },
  });

export default createStyles;
