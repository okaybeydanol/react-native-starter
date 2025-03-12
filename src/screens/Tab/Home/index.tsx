import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

// Components
import HomeScreenHeader from '@components/Tab/Home/Header';
import HomeScreenMain from '@components/Tab/Home/Main';

// Styles
import getStyles from './styles';

// Types
import {HomeScreenProps} from './types';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <HomeScreenHeader navigation={navigation} route={route} />
      <HomeScreenMain navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default HomeScreen;
