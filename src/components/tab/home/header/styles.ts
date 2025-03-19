import {StyleSheet} from 'react-native';

// Types
import {AppTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/typography';

const createStyles = (colors: AppTheme['colors']) =>
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

export default createStyles;
