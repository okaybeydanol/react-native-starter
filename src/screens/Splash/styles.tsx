import {StyleSheet} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/index';

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
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
    scrollContentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    scrollContainer: {
      flex: 1,
      padding: 16,
    },
    productContainer: {
      backgroundColor: colors.gray[600],
      borderRadius: 8,
      padding: 8,
      marginBottom: 16,
      alignItems: 'center',
    },
  });

export default getStyles;
