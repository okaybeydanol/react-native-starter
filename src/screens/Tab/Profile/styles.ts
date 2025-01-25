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
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.text,
      fontFamily: fontFamily.bold,
    },
  });

export default getStyles;
