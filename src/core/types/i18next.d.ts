// Third-Party Libraries
import 'i18next';

// Internal Imports (Absolute)
import {resources} from '@i18n/i18n';

const locale = resources.en;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      data: typeof locale.data;
      global: typeof locale.global;
      home: typeof locale.home;
    };
  }
}
