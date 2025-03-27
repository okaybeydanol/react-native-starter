// Theme state
export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
  setTheme: (mode: 'light' | 'dark' | 'system') => void;
}

// Language state
export interface LanguageState {
  language: string;
  _hasHydrated: boolean;
  setLanguage: (language: string) => void;
  setHydrated: (hydrated: boolean) => void;
}
