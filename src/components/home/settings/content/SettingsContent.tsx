import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Styles
import createStyles from './styles';

// Types
import type {SettingContentProps} from './types';

const SettingsContent = ({navigation}: SettingContentProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation('home');

  const handleTheme = () => {
    navigation.navigate('ThemeScreen');
  };

  const handleLanguage = () => {
    navigation.navigate('LanguageScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.settingItem} onPress={handleTheme}>
          <Text style={styles.settingText}>{t('theme.th')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleLanguage}>
          <Text style={styles.settingText}>{t('language.lang')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsContent;
