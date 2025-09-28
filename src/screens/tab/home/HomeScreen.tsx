// React & React Native
import React from 'react';
import { SafeAreaView } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// Internal Imports (Absolute)
import HomeContent from '@components/tab/home/content/HomeContent';
import GlobalHeader from '@components/ui/GlobalHeader';
import type { ButtonConfig } from '@components/ui/types';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { HomeScreenProps } from './types';

const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('home');

  const defaultRightConfig: ButtonConfig = {
    icon: 'settings',
    iconProps: {
      stroke: colors.gray[500],
      strokeWidth: 1.5,
      width: 18,
      height: 18,
    },
    onPress: () =>
      navigation.navigate('HomeNavigator', { screen: 'SettingsScreen' }),
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader
        showLeftButton={false}
        showRightButton={true}
        rightButtonConfig={defaultRightConfig}
        title={t('users')}
      />
      <HomeContent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default HomeScreen;
