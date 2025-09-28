// React & React Native
import React from 'react';

// Third-Party Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Internal Imports (Absolute)
import { defaultNavigatorOptions } from '@constants/navigationConfig';
import SplashScreen from '@screens/splash/SplashScreen';

// Sibling Directory Imports (Relative)
import type { SplashStack } from './types';

const Splash = createNativeStackNavigator<SplashStack>();
const SplashNavigator = () => {
  return (
    <Splash.Navigator
      initialRouteName="SplashScreen"
      screenOptions={defaultNavigatorOptions}
    >
      <Splash.Screen name="SplashScreen" component={SplashScreen} />
    </Splash.Navigator>
  );
};

export default SplashNavigator;
