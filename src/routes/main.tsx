import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constant
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Type
import {MainNavigatorParams} from '@routes/types';

// Navigator
import {SplashNavigator} from './splash';

const Main = createNativeStackNavigator<MainNavigatorParams>();

export const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName="SplashNavigator"
      screenOptions={defaultNavigatorOptions}>
      <Main.Screen name="SplashNavigator" component={SplashNavigator} />
    </Main.Navigator>
  );
};
