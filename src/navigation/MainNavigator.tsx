import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {MainStack} from 'navigation/types';

// Navigators
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
    </Main.Navigator>
  );
};

export default MainNavigator;
