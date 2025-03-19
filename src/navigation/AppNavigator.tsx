import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {RootStack} from './types';

// Hooks
import useAppTheme from '@hooks/useAppTheme';

// Navigators
import MainNavigator from './MainNavigator';

const Root = createNativeStackNavigator<RootStack>();
const RootNavigator = () => {
  return (
    <Root.Navigator
      initialRouteName="MainNavigator"
      screenOptions={defaultNavigatorOptions}>
      <Root.Screen name="MainNavigator" component={MainNavigator} />
    </Root.Navigator>
  );
};

const AppNavigator = () => {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
