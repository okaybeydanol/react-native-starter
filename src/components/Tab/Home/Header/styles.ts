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
    },
    button: {
      backgroundColor: colors.gray[600],
      padding: 12,
      margin: 8,
      borderRadius: 8,
      width: '25%',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      color: colors.gray[100],
      fontFamily: fontFamily.semiBold,
    },
  });

export default getStyles;
