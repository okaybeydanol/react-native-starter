// Third-Party Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

// Parent Directory Imports (Relative)
import type {LanguageState} from '../types';

export const useLanguageStore = create<LanguageState>()(
  persist(
    set => ({
      language: '',
      _hasHydrated: false,
      setLanguage: (language: string) => {
        set({language});
      },
      setHydrated: (hydrated: boolean) => set({_hasHydrated: hydrated}),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => state => {
        state?.setHydrated(true);
      },
    },
  ),
);
