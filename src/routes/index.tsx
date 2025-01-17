import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {RootStackParams} from './types';

// Navigators
import MainNavigator from './main';

const Root = createNativeStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <Root.Navigator screenOptions={defaultNavigatorOptions}>
      <Root.Screen name="MainNavigator" component={MainNavigator} />
    </Root.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
