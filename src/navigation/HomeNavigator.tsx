// React & React Native
import React from 'react';

// Third-Party Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Internal Imports (Absolute)
import {
  defaultFullScreenModalOptions,
  defaultModalOptions,
  defaultNavigatorOptions,
} from '@constants/navigationConfig';
import LanguageScreen from '@screens/settings/language/LanguageScreen';
import SettingsScreen from '@screens/settings/SettingsScreen';
import ThemeScreen from '@screens/settings/theme/ThemeScreen';

// Sibling Directory Imports (Relative)
import type { HomeStack } from './types';

const Home = createNativeStackNavigator<HomeStack>();
const HomeNavigator = () => {
  return (
    <Home.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={defaultNavigatorOptions}
    >
      <Home.Screen name="SettingsScreen" component={SettingsScreen} />
      <Home.Screen
        options={defaultModalOptions}
        name="ThemeScreen"
        component={ThemeScreen}
      />
      <Home.Screen
        options={defaultFullScreenModalOptions}
        name="LanguageScreen"
        component={LanguageScreen}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
