// React & React Native
import React from 'react';

// Third-Party Libraries
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Internal Imports (Absolute)
import TabBar from '@components/tabbar/TabBar';
import {defaultTabNavigatorOptions} from '@constants/navigationConfig';
import HomeScreen from '@screens/tab/home/HomeScreen';
import ProfileScreen from '@screens/tab/profile/ProfileScreen';

// Sibling Directory Imports (Relative)
import type {TabStack} from './types';

const Tab = createBottomTabNavigator<TabStack>();

// tabBar
const tabBar = (props: BottomTabBarProps) => {
  return <TabBar {...props} />;
};

// Sub Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={defaultTabNavigatorOptions}
      tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
