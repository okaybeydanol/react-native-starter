import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Components
import SingleSelection from '@components/home/settings/SingleSelection';

// Store
import {useThemeStore} from '@query/store';

// Types
import type {SettingsThemeContent} from './types';

// Styles
import createStyles from './styles';

const ThemeContent = ({navigation}: SettingsThemeContent) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation('home');
  const {mode, setTheme} = useThemeStore();

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
