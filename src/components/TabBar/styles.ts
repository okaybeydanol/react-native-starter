import {StyleSheet} from 'react-native';

// Constants
import {TAB_BAR_HEIGHT} from '@constants/dimensions';

// Types
import {MyTheme} from '@theme/types';

const getStyles = (colors: MyTheme['colors']) =>
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

export default getStyles;
