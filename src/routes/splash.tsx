import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constant
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Type
import {SplashNavigatorParams} from '@routes/types';

// Screen
import SplashScreen from '@screens/Splash';

const Splash = createNativeStackNavigator<SplashNavigatorParams>();

export const SplashNavigator = () => {
  return (
    <Splash.Navigator
      initialRouteName="SplashScreen"
      screenOptions={defaultNavigatorOptions}>
      <Splash.Screen name="SplashScreen" component={SplashScreen} />
    </Splash.Navigator>
  );
};
