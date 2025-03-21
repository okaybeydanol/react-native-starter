import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

// Components
import SingleSelection from '@components/home/settings/SingleSelection';

// Store
import {useLanguageStore} from '@query/store';

//Types
import type {SettingsLanguageContentProps} from './types';

// Styles
import createStyles from './styles';

const LanguageContent = ({navigation}: SettingsLanguageContentProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t, i18n} = useTranslation('home');
  const {setLanguage} = useLanguageStore();

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
