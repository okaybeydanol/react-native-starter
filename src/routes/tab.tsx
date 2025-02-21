import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Components
import TabBar from '@components/TabBar';

// Constants
import {DEFAULT_TAB_OPTIONS} from '@constants/navigationConfig';

// Types
import {TabStack} from './types';

// Screens
import HomeScreen from '@screens/Tab/Home';
import ProfileScreen from '@screens/Tab/Profile';

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
      screenOptions={DEFAULT_TAB_OPTIONS}
      tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
