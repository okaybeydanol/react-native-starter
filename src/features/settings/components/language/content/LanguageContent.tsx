// React & React Native
import React from 'react';
import {View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Internal Imports (Absolute)
import {setLanguage} from '@features/settings/screens/language/slices/languageSlice';
import {useAppDispatch} from '@store/store';

// Parent Directory Imports (Relative)
import SingleSelection from '../../SingleSelection';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type {SettingsLanguageContentProps} from './types';

const LanguageContent = ({navigation}: SettingsLanguageContentProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t, i18n} = useTranslation('home');
  const dispatch = useAppDispatch();

  const handleSelectLanguage = (lang: 'tr' | 'en') => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage({language: lang}));
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
