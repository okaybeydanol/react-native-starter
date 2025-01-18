import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Locales
import en from './locales/en';
import tr from './locales/tr';

export const resources = {
  en,
  tr,
};

// MULTI LANGUAGE HANDLER
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: ['tr', 'en'],
  resources,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
