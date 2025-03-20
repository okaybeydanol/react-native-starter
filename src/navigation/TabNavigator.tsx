import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Components
import TabBar from '@components/tabbar/TabBar';

// Constants
import {defaultTabOptions} from '@constants/navigationConfig';

// Types
import type {TabStack} from './types';

// Screens
import HomeScreen from '@screens/tab/home/HomeScreen';
import ProfileScreen from '@screens/tab/profile/ProfileScreen';

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
      screenOptions={defaultTabOptions}
      tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
