// Internal Imports (Absolute)
import type { HomeStackScreenProps } from '@navigation/types';

export interface LanguageScreenProps
  extends HomeStackScreenProps<'LanguageScreen'> {}

export type LanguageState = {
  language: string;
};
