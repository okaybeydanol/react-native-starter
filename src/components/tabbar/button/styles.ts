import {StyleSheet} from 'react-native';

// Types
import {AppTheme} from '@theme/types';

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
