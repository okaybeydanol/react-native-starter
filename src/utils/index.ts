// Contansts
import {DEFAULT_LOCALE_MAP, LOWER_CASE_MAP} from '@constants/index';

export const convertToLocale = (
  text: string,
  localeMap?: Record<string, string>,
): string => {
  if (!text?.length) {
    return '';
  }

  const map = localeMap || DEFAULT_LOCALE_MAP;
  const length = text.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += map[text[i]] || text[i];
  }
  return result;
};

export const convertToLocaleAndLoweCase = (
  text: string,
  localeMap?: Record<string, string>,
): string => {
  if (!text?.length) {
    return '';
  }
  const map = {...(localeMap || DEFAULT_LOCALE_MAP), ...LOWER_CASE_MAP};
  const length = text.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += map[text[i]] || text[i];
  }
  return result;
};
