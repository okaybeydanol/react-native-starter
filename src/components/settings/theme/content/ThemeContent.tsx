// React & React Native
import React from 'react';
import { View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// Internal Imports (Absolute)
import SingleSelection from '@components/settings/SingleSelection';
import { useThemeStore } from '@query/store/slices/themeSlice';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { SettingsThemeContent } from './types';

const ThemeContent = ({ navigation }: SettingsThemeContent) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('home');
  const { setTheme, mode } = useThemeStore(state => state);

  const handleTheme = (themeMode: 'dark' | 'light' | 'system') => {
    setTheme(themeMode);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SingleSelection
        onPress={() => handleTheme('dark')}
        title={t('theme.dark')}
        isActive={mode === 'dark'}
      />
      <SingleSelection
        onPress={() => handleTheme('light')}
        title={t('theme.light')}
        isActive={mode === 'light'}
      />
      <SingleSelection
        onPress={() => handleTheme('system')}
        title={t('theme.system')}
        isActive={mode === 'system'}
      />
    </View>
  );
};

export default ThemeContent;
