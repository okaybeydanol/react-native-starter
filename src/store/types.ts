// Types
import type {UsersResponse} from './api/types';

// User
export interface UserState {
  isLoggedIn: boolean;
}

// THEME
export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
}

// USERS
export interface UsersState extends UsersResponse {}

export type LanguageState = {
  language: string;
};
