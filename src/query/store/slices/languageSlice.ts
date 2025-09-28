// Third-Party Libraries
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Internal Imports (Absolute)
import { zustandPersistStorage } from '@utils/MMKVStorage';

// Parent Directory Imports (Relative)
import type { LanguageState } from '../types';

export const useLanguageStore = create<LanguageState>()(
  persist(
    set => ({
      language: '',
      _hasHydrated: false,
      setLanguage: (language: string) => {
        set({ language });
      },
      setHydrated: (hydrated: boolean) => set({ _hasHydrated: hydrated }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => zustandPersistStorage),
      onRehydrateStorage: () => state => {
        state?.setHydrated(true);
      },
    },
  ),
);
