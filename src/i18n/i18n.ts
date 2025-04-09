// Third-Party Libraries
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Sibling Directory Imports (Relative)
import en from './locales/en/translations';
import tr from './locales/tr/translations';

// Locales

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
