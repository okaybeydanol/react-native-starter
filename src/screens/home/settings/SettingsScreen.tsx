import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

// Components
import GlobalHeader from '@components/ui/GlobalHeader';
import SettingsContent from '@components/home/settings/content/SettingsContent';

// Types
import type {SettingScreenProps} from './types';

// Styles
import createStyles from './styles';

const SettingsScreen = ({navigation, route}: SettingScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation('home');

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <GlobalHeader title={t('settings')} />
      <SettingsContent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
