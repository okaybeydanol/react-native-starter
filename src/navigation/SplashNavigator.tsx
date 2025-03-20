import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import type {SplashStack} from '@navigation/types';

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
