// Third-Party Libraries
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Internal Imports (Absolute)
import { zustandPersistStorage } from '@utils/MMKVStorage';

// Parent Directory Imports (Relative)
import type { ThemeState } from '../types';

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      mode: 'system',
      setTheme: (mode: 'light' | 'dark' | 'system') => set({ mode }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => zustandPersistStorage),
    },
  ),
);
