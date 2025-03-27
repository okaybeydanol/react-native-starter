// React & React Native
import React from 'react';
import {View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import SingleSelection from '@components/settings/SingleSelection';
import {useLanguageStore} from '@query/store/slices/languageSlice';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {SettingsLanguageContentProps} from './types';

const LanguageContent = ({navigation}: SettingsLanguageContentProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t, i18n} = useTranslation('home');
  const setLanguage = useLanguageStore(state => state.setLanguage);

  const handleSelectLanguage = (lang: 'tr' | 'en') => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SingleSelection
        onPress={() => handleSelectLanguage('tr')}
        title={t('language.tr')}
        isActive={i18n.language === 'tr'}
      />
      <SingleSelection
        onPress={() => handleSelectLanguage('en')}
        title={t('language.en')}
        isActive={i18n.language === 'en'}
      />
    </View>
  );
};

export default LanguageContent;
