import React from 'react';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

// Components
import HomeContent from '@components/tab/home/content/HomeContent';
import GlobalHeader from '@components/ui/GlobalHeader';

// Types
import type {HomeScreenProps} from './types';
import type {ButtonConfig} from '@components/ui/types';

// Styles
import createStyles from './styles';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const {t} = useTranslation('home');

  const defaultRightConfig: ButtonConfig = {
    icon: 'settings',
    iconProps: {
      stroke: colors.gray[500],
      strokeWidth: 1.5,
      width: 18,
      height: 18,
    },
    onPress: () =>
      navigation.navigate('HomeNavigator', {screen: 'SettingsScreen'}),
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
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
