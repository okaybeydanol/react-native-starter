// React & React Native
import React from 'react';
import {StatusBar} from 'react-native';

// Third-Party Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Internal Imports (Absolute)
import {defaultNavigatorOptions} from '@constants/navigationConfig';
import useAppTheme from '@hooks/useAppTheme';

// Sibling Directory Imports (Relative)
import MainNavigator from './MainNavigator';
import type {RootStack} from './types';

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
