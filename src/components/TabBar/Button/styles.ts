import {StyleSheet} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
  });

export default getStyles;
