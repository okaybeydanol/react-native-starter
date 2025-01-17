import {NavigatorScreenParams} from '@react-navigation/native';

// Root stack
export type RootStackParams = {
  MainNavigator: NavigatorScreenParams<MainNavigatorParams>;
};

// Main stack
export type MainNavigatorParams = {
  SplashNavigator: NavigatorScreenParams<SplashNavigatorParams>;
};

// Splash stack
export type SplashNavigatorParams = {
  SplashScreen: undefined;
};
