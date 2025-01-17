import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {MainStack} from '@routes/types';

// Navigators
import SplashNavigator from './splash';

const Main = createNativeStackNavigator<MainStack>();
const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName="SplashNavigator"
      screenOptions={defaultNavigatorOptions}>
      <Main.Screen name="SplashNavigator" component={SplashNavigator} />
    </Main.Navigator>
  );
};

export default MainNavigator;
