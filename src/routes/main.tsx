import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {DEFAULT_NAVIGATOR_OPTIONS} from '@constants/navigationConfig';

// Types
import {MainStack} from '@routes/types';

// Navigators
import SplashNavigator from './splash';
import TabNavigator from './tab';

const Main = createNativeStackNavigator<MainStack>();
const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName="SplashNavigator"
      screenOptions={DEFAULT_NAVIGATOR_OPTIONS}>
      <Main.Screen name="SplashNavigator" component={SplashNavigator} />
      <Main.Screen name="TabNavigator" component={TabNavigator} />
    </Main.Navigator>
  );
};

export default MainNavigator;
