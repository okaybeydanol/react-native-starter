import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Types
import {SplashScreenProps} from './types';

// Styles
import getStyles from './styles';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO: Change to navigate to replace fist look document
      navigation.navigate('TabNavigator', {screen: 'HomeScreen'});
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
