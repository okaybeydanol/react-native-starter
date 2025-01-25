import React from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Hooks
import useLoading from '@hooks/useLoading';

// Styles
import getStyles from './styles';

// Types
import {HomeScreenProps} from './types';

// Components
import HomeScreenHeader from '@components/Tab/Home/Header';
import HomeScreenMain from '@components/Tab/Home/Main';

const HomeScreen = ({}: HomeScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  // Custom hook to manage the loading state
  const {isLoading, setLoading} = useLoading();

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header Section */}
      <HomeScreenHeader setLoading={setLoading} />

      {/* FlashList Content Section */}
      <HomeScreenMain isLoading={isLoading} setLoading={setLoading} />
    </SafeAreaView>
  );
};

export default HomeScreen;
