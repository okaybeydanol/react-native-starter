// Third-Party Libraries
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
  HomeNavigator: NavigatorScreenParams<HomeStack>;
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

// Home stack
export type HomeStack = {
  SettingsScreen: undefined;
  ThemeScreen: undefined;
  LanguageScreen: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStack> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStack, T>,
    MainStackScreenProps<keyof MainStack>
  >;
