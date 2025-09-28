// Internal Imports (Absolute)
import type { HomeStackScreenProps } from '@navigation/types';

export interface ThemeScreenProps extends HomeStackScreenProps<'ThemeScreen'> {}

// THEME
export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
}
