import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Component
import TabBar from '@components/TabBar';

// Constants
import {defaultTabOptions} from '@constants/navigationConfig';

// Type
import {TabStack} from './types';

// Screen
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
      screenOptions={defaultTabOptions}
      tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
