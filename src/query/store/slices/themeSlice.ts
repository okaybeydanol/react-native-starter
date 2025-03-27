// Third-Party Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

// Parent Directory Imports (Relative)
import type {ThemeState} from '../types';

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      mode: 'system',
      setTheme: (mode: 'light' | 'dark' | 'system') => set({mode}),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
