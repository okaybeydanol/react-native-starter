// React & React Native
import React from 'react';

// Third-Party Libraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Internal Imports (Absolute)
import {defaultNavigatorOptions} from '@constants/navigationConfig';
import type {MainStack} from '@navigation/types';

// Sibling Directory Imports (Relative)
import HomeNavigator from './HomeNavigator';
import SplashNavigator from './SplashNavigator';
import TabNavigator from './TabNavigator';

const Main = createNativeStackNavigator<MainStack>();
const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName="SplashNavigator"
      screenOptions={defaultNavigatorOptions}>
      <Main.Screen name="SplashNavigator" component={SplashNavigator} />
      <Main.Screen name="TabNavigator" component={TabNavigator} />
      <Main.Screen name="HomeNavigator" component={HomeNavigator} />
    </Main.Navigator>
  );
};

export default MainNavigator;
