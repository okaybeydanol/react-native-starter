// React & React Native
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { SettingContentProps } from './types';

const SettingsContent = ({ navigation }: SettingContentProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('home');

  const switchTheme = () => {
    navigation.navigate('ThemeScreen');
  };

  const changeLanguage = () => {
    navigation.navigate('LanguageScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.settingItem} onPress={switchTheme}>
          <Text style={styles.settingText}>{t('theme.th')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={changeLanguage}>
          <Text style={styles.settingText}>{t('language.lang')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsContent;
