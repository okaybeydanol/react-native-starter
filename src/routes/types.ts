import {NavigatorScreenParams} from '@react-navigation/native';

// Root stack
export type RootStack = {
  MainNavigator: NavigatorScreenParams<MainStack>;
};

// Main stack
export type MainStack = {
  SplashNavigator: NavigatorScreenParams<SplashStack>;
};

// Splash stack
export type SplashStack = {
  SplashScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}
