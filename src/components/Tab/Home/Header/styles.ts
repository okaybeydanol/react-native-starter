import {StyleSheet} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/index';

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      paddingVertical: 8,
    },
    button: {
      backgroundColor: colors.gray[600],
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: colors.gray[100],
      fontFamily: fontFamily.semiBold,
    },
  });

export default getStyles;
