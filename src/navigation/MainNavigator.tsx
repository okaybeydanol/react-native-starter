import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import type {MainStack} from '@navigation/types';

// Navigators
import SplashNavigator from './SplashNavigator';
import TabNavigator from './TabNavigator';
import HomeNavigator from './HomeNavigator';

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
