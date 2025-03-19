import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {SplashStack} from 'navigation/types';

// Screens
import SplashScreen from '@screens/splash/SplashScreen';

const Splash = createNativeStackNavigator<SplashStack>();
const SplashNavigator = () => {
  return (
    <Splash.Navigator
      initialRouteName="SplashScreen"
      screenOptions={defaultNavigatorOptions}>
      <Splash.Screen name="SplashScreen" component={SplashScreen} />
    </Splash.Navigator>
  );
};

export default SplashNavigator;
