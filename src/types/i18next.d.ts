import 'i18next';

// Constant
import {resources} from '@i18n/index';
const locale = resources.en;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      data: typeof locale.data;
      global: typeof locale.global;
    };
  }
}
