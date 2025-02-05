import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Components
import HomeScreenHeader from '@components/Tab/Home/Header';
import HomeScreenMain from '@components/Tab/Home/Main';

// Hooks
import useLoading from '@hooks/useLoading';

// Styles
import getStyles from './styles';

// Types
import {HomeScreenProps} from './types';

const HomeScreen = ({}: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {isLoading, setLoading} = useLoading();

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader setLoading={setLoading} />
      <HomeScreenMain isLoading={isLoading} setLoading={setLoading} />
    </SafeAreaView>
  );
};

export default HomeScreen;
