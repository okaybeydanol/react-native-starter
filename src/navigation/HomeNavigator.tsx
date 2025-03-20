import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {defaultNavigatorOptions} from '@constants/navigationConfig';

// Types
import type {HomeStack} from '@navigation/types';

// Screens
import SettingsScreen from '@screens/home/settings/SettingsScreen';
import ThemeScreen from '@screens/home/settings/theme/ThemeScreen';
import LanguageScreen from '@screens/home/settings/language/LanguageScreen';

const Home = createNativeStackNavigator<HomeStack>();
const HomeNavigator = () => {
  return (
    <Home.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={defaultNavigatorOptions}>
      <Home.Screen name="SettingsScreen" component={SettingsScreen} />
      <Home.Screen
        options={{presentation: 'modal', animation: 'slide_from_bottom'}}
        name="ThemeScreen"
        component={ThemeScreen}
      />
      <Home.Screen
        options={{presentation: 'modal', animation: 'slide_from_bottom'}}
        name="LanguageScreen"
        component={LanguageScreen}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
