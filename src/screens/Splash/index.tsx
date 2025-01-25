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
    setTimeout(() => {
      navigation.navigate('TabNavigator', {screen: 'HomeScreen'});
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
