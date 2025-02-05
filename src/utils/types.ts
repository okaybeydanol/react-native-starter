// Recursive type to extract deep keys
export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends infer V
        ? V extends Record<string | number, unknown>
          ? `${K}.${NestedKeys<V>}`
          : V extends string
          ? `${K}`
          : never
        : never;
    }[keyof T & (string | number)]
  : never;

// Recursive type to extract deep keys with depth
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N ? Acc : Enumerate<N, [...Acc, Acc['length']]>;

type Subtract<A extends number, B extends number> = Enumerate<A> extends [
  ...Enumerate<B>,
  ...infer R,
]
  ? R['length']
  : 0;

export type DeepKeys<T, Depth extends number = 1> = [Depth] extends [0]
  ? never
  : T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends infer V
        ? V extends Record<string | number, unknown>
          ? Subtract<Depth, 1> extends 0
            ? never
            : `${K}.${DeepKeys<V, Subtract<Depth, 1>>}`
          : V extends string
          ? `${K}`
          : never
        : never;
    }[keyof T & (string | number)]
  : never;

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
