import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Root stack
export type RootStack = {
  MainNavigator: NavigatorScreenParams<MainStack>;
};

export type RootStackScreenProps<T extends keyof RootStack> =
  NativeStackScreenProps<RootStack, T>;

// Main stack
export type MainStack = {
  SplashNavigator: NavigatorScreenParams<SplashStack>;
  TabNavigator: NavigatorScreenParams<TabStack>;
};

export type MainStackScreenProps<T extends keyof MainStack> =
  NativeStackScreenProps<MainStack, T>;

// Splash stack
export type SplashStack = {
  SplashScreen: undefined;
};

export type SplashStackScreenProps<T extends keyof SplashStack> =
  CompositeScreenProps<
    NativeStackScreenProps<SplashStack, T>,
    MainStackScreenProps<keyof MainStack>
  >;

// Tab stack
export type TabStack = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type TabStackScreenProps<T extends keyof TabStack> =
  CompositeScreenProps<
    BottomTabScreenProps<TabStack, T>,
    MainStackScreenProps<keyof MainStack>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}
