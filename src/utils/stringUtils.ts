// Constants
import {DEFAULT_LOCALE_MAP} from '@constants/localization';
import {TURKISH_CHARS_REGEX} from '@constants/regex';

// Types
import {ConvertToLocaleProps} from './types';

export const convertToLocale = ({
  text,
  localeMap,
  toLower = false,
}: ConvertToLocaleProps): string => {
  if (!text?.length) {
    return '';
  }

  const charHandler = (char: string) =>
    (localeMap || DEFAULT_LOCALE_MAP)[char] || char;

  return toLower
    ? text.replace(TURKISH_CHARS_REGEX, charHandler).toLowerCase()
    : text.replace(TURKISH_CHARS_REGEX, charHandler);
};
