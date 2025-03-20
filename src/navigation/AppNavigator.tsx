import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import type {RootStack} from './types';

// Hooks
import useAppTheme from '@hooks/useAppTheme';

// Navigators
import MainNavigator from './MainNavigator';

const Root = createNativeStackNavigator<RootStack>();
const RootNavigator = () => {
  const {colors} = useAppTheme();

  return (
    <Root.Navigator
      initialRouteName="MainNavigator"
      screenOptions={{
        ...defaultNavigatorOptions,
        navigationBarColor: colors.background,
      }}>
      <Root.Screen name="MainNavigator" component={MainNavigator} />
    </Root.Navigator>
  );
};

const AppNavigator = () => {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
