import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

// Default navigator options
export const defaultNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

// Tab navigator options
export const defaultTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
