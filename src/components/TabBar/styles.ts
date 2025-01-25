import {StyleSheet} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 64,
      borderTopWidth: 0.2,
      borderTopColor: colors.gray[300],
    },
  });

export default getStyles;
