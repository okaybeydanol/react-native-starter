// React & React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import type { FlatNamespace } from 'i18next';
import { useTranslation } from 'react-i18next';

// Internal Imports (Absolute)
import type { AppTheme } from '@theme/types';

// Sibling Directory Imports (Relative)
import type { GenericViewProps } from './types';

const GenericView = <K extends FlatNamespace>({
  ns,
  tKey,
}: GenericViewProps<K>) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation<FlatNamespace>(ns);

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
    },
  });
