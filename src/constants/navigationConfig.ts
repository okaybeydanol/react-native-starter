// Third-Party Libraries
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

// Default navigator options
export const defaultNavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

// Tab navigator options
export const defaultTabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

// Modal options
// This is used for modals that are presented over the current screen
export const defaultModalOptions: NativeStackNavigationOptions = {
  presentation: 'modal',
  animation: 'slide_from_bottom',
};

// Full-screen modal options
// This is used for modals that take up the entire screen
export const defaultFullScreenModalOptions: NativeStackNavigationOptions = {
  presentation: 'fullScreenModal',
  animation: 'slide_from_bottom',
};
