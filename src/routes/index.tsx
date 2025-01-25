import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import {RootStack} from './types';

// Themes
import {lightTheme} from '@theme/light';
import {darkTheme} from '@theme/dark';

// Store
import {useAppSelector} from '@store/index';

// Navigators
import MainNavigator from './main';

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

const Navigation = () => {
  const themePreference = useAppSelector(state => state.theme.mode);
  const isSystem = themePreference === 'system';

  const scheme = useColorScheme();
  const themeMode = isSystem ? scheme : themePreference;
  const myTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer theme={myTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
