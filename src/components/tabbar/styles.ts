import {StyleSheet} from 'react-native';

// Constants
import {tabBarHeight} from '@constants/dimensions';

// Types
import {AppTheme} from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: tabBarHeight,
      borderTopWidth: 0.2,
      borderTopColor: colors.gray[300],
    },
  });

export default createStyles;
