// React & React Native
import React from 'react';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

// Internal Imports (Absolute)
import SettingsContent from '@components/settings/content/SettingsContent';
import GlobalHeader from '@components/ui/GlobalHeader';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { SettingScreenProps } from './types';

const SettingsScreen = ({ navigation, route }: SettingScreenProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('home');

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title={t('settings')} />
      <SettingsContent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
