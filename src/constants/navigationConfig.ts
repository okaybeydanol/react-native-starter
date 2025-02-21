import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

// Default navigator options
export const DEFAULT_NAVIGATOR_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

// Tab navigator options
export const DEFAULT_TAB_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
};
