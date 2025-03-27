// Internal Imports (Absolute)
import {defaultLocaleMap} from '@constants/localization';
import {turkishCharsRegex} from '@constants/regex';

// Sibling Directory Imports (Relative)
import type {ConvertToLocaleProps} from './types';

export const convertToLocale = ({
  text,
  localeMap,
  toLower = false,
}: ConvertToLocaleProps): string => {
  if (!text?.length) {
    return '';
  }

  const charHandler = (char: string) =>
    (localeMap || defaultLocaleMap)[char] || char;

  return toLower
    ? text.replace(turkishCharsRegex, charHandler).toLowerCase()
    : text.replace(turkishCharsRegex, charHandler);
};
