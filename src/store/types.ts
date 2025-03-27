export interface UserState {
  isLoggedIn: boolean;
}

// THEME
export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
}

export type LanguageState = {
  language: string;
};
