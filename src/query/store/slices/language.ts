import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type {LanguageState} from '../types';

// i18n
import i18n from '@i18n/index';

export const useLanguageStore = create<LanguageState>()(
  persist(
    set => ({
      language: '',
      _hasHydrated: false,
      setLanguage: (language: string) => {
        i18n.changeLanguage(language);
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
