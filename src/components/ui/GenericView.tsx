import {useTheme} from '@react-navigation/native';
import {FlatNamespace} from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';

// Types
import {AppTheme} from '@theme/types';
import {GenericViewProps} from './types';

// Constants
import {fontFamily} from '@constants/typography';

const GenericView = <K extends FlatNamespace>({
  ns,
  tKey,
}: GenericViewProps<K>) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation<FlatNamespace>(ns);

  return (
    <View style={styles.container}>
      <View style={styles.usersContainer}>
        <Text style={styles.text}>{t(tKey)}</Text>
      </View>
    </View>
  );
};

export default GenericView;

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.background,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    usersContainer: {
      backgroundColor: colors.gray[500],
      width: '100%',
      borderRadius: 8,
      padding: 20,
      marginBottom: 16,
      marginHorizontal: 16,
    },
    text: {
      textAlign: 'center',
      fontSize: 14,
      color: colors.gray[100],
      fontFamily: fontFamily.semiBold,
    },
  });
