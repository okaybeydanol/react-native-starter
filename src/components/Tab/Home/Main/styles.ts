import {StyleSheet} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/index';

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      paddingVertical: 16,
    },
    text: {
      fontSize: 16,
      color: colors.gray[100],
      fontFamily: fontFamily.semiBold,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productContainer: {
      backgroundColor: colors.gray[600],
      borderRadius: 8,
      padding: 8,
      height: 38,
      marginBottom: 16,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default getStyles;
