import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  MainNavigator: NavigatorScreenParams<MainNavigatorParams>;
};

export type MainNavigatorParams = {
  SplashNavigator: NavigatorScreenParams<SplashNavigatorParams>;
};

export type SplashNavigatorParams = {
  SplashScreen: undefined;
};
