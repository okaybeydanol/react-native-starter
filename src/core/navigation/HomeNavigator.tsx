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
import LanguageScreen from '@features/settings/screens/language/LanguageScreen';
import SettingsScreen from '@features/settings/screens/settings/SettingsScreen';
import ThemeScreen from '@features/settings/screens/theme/ThemeScreen';
import type { HomeStack } from '@navigation/types';

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
