// Slugify function types
export interface SlugifyOptions {
  replacement?: string;
  remove?: string | string[];
  lower?: boolean;
  upper?: boolean;
  trim?: boolean;
  caseSensitive?: boolean;
  localeMap?: Record<string, string>;
}

export interface ReplaceLocaleCharacters {
  input: string;
  localeMap: Record<string, string>;
}

export interface RemovePatterns {
  input: string;
  remove?: string | string[];
  caseSensitive: boolean;
}

export interface TrimResult {
  input: string;
  trim: boolean;
}

export interface ReplaceSpacesWithReplacement {
  input: string;
  replacement: string;
}

export interface AdjustCase {
  input: string;
  lower: boolean;
  upper: boolean;
}
