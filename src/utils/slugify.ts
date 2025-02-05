import {defaultLocale} from '@constants/index';
import {
  AdjustCase,
  RemovePatterns,
  ReplaceLocaleCharacters,
  ReplaceSpacesWithReplacement,
  SlugifyOptions,
  TrimResult,
} from './types';

// Normalize Unicode characters (handle accented characters)
const normalizeAndRemoveAccents = ({input}: {input: string}): string =>
  input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Apply locale-based character replacements
const replaceLocaleCharacters = ({
  input,
  localeMap,
}: ReplaceLocaleCharacters): string =>
  input.replace(/[^\s]/g, char => localeMap[char] || char);

// Remove non-alphanumeric characters (except spaces)
const removeNonAlphanumericExceptSpaces = ({input}: {input: string}): string =>
  input.replace(/[^a-zA-Z0-9\s]/g, '');

// If "remove" is provided as a string or array, remove all occurrences of it
const applyRemovePatterns = ({
  input,
  remove,
  caseSensitive,
}: RemovePatterns): string => {
  if (!remove) {
    return input;
  }

  const removePatterns = Array.isArray(remove) ? remove : [remove];
  return removePatterns.reduce((result, pattern) => {
    const flags = caseSensitive ? 'g' : 'gi';
    return result.replace(new RegExp(pattern, flags), '');
  }, input);
};

// Trim leading and trailing spaces if "trim" is true
const trimResult = ({input, trim}: TrimResult): string => {
  if (!trim) {
    return input;
  }
  return input.trim();
};

// Replace multiple spaces with a single space and replace spaces with the specified replacement character
const replaceSpacesWithReplacement = ({
  input,
  replacement,
}: ReplaceSpacesWithReplacement): string => input.replace(/\s+/g, replacement);

// Convert to lowercase or uppercase if specified
const adjustCase = ({input, lower, upper}: AdjustCase): string => {
  if (lower) {
    return input.toLowerCase();
  }
  if (upper) {
    return input.toUpperCase();
  }
  return input;
};

export const slugify = (
  input: string,
  options: SlugifyOptions = {},
): string => {
  const {
    replacement = '-',
    remove,
    lower = false,
    upper = false,
    trim = true,
    caseSensitive = false,
    localeMap = defaultLocale,
  } = options;

  let result = input;

  result = normalizeAndRemoveAccents({input: result});
  result = replaceLocaleCharacters({input: result, localeMap});
  result = removeNonAlphanumericExceptSpaces({input: result});
  result = applyRemovePatterns({input: result, remove, caseSensitive});
  result = trimResult({input: result, trim});
  result = replaceSpacesWithReplacement({input: result, replacement});
  result = adjustCase({input: result, lower, upper});

  return result;
};
