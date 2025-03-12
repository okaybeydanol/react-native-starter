import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {DEFAULT_NAVIGATOR_OPTIONS} from '@constants/navigationConfig';

// Types
import {RootStack} from './types';

// Hooks
import useAppTheme from '@hooks/useAppTheme';

// Navigators
import MainNavigator from './main';

const Root = createNativeStackNavigator<RootStack>();
const RootNavigator = () => {
  return (
    <Root.Navigator
      initialRouteName="MainNavigator"
      screenOptions={DEFAULT_NAVIGATOR_OPTIONS}>
      <Root.Screen name="MainNavigator" component={MainNavigator} />
    </Root.Navigator>
  );
};

const Navigation = () => {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
