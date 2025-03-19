import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import HomeContent from '@components/tab/home/content/HomeContent';
import HomeHeader from '@components/tab/home/header/HomeHeader';

// Styles
import createStyles from './styles';

// Types
import {HomeScreenProps} from './types';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <HomeHeader title="Users" />
      <HomeContent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default HomeScreen;
