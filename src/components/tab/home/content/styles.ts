import {StyleSheet} from 'react-native';

// Types
import {AppTheme} from '@theme/types';

// Constants
import {fontFamily} from '@constants/typography';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      paddingTop: 8,
      paddingBottom: 24,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerContainer: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: colors.background,
    },
    headerTitle: {
      fontSize: 24,
      color: colors.gray[900],
      fontFamily: fontFamily.bold,
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.gray[500],
      fontFamily: fontFamily.medium,
    },
  });

export default createStyles;
