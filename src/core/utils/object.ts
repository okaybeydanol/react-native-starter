export type NestedKeysArray<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? T[K] extends string
          ? [K] // Base case: if the value is a string, return the key as a single-element array
          : T[K] extends object
          ? [K, ...NestedKeysArray<T[K]>] // Recursive case: if the value is an object, dive deeper
          : never // Invalid case: neither string nor object
        : never; // Invalid case: key is not a string or number
    }[keyof T]
  : never;

/**
 * Recursively extracts nested keys of an object as dot-notation strings.
 * Useful for representing nested object paths in a string format.
 *
 * Example:
 * type Theme = { colors: { primary: string; secondary: { light: string; dark: string } } };
 * type Paths = NestedDotNotationPaths<Theme['colors']>;
 * "primary" | "secondary.light" | "secondary.dark"
 * */
export type NestedKeysDotNotationPaths<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends Record<
        string | number,
        unknown
      >
        ? `${K}.${NestedKeysDotNotationPaths<T[K]>}` // Recursive case: if the value is an object, dive deeper
        : T[K] extends string
        ? `${K}` // Base case: if the value is a string, return the key
        : never; // Invalid case: neither string nor object
    }[keyof T & (string | number)]
  : never;

/**
 * Generates a tuple of numbers from 0 up to (but not including) N.
 * Used internally for numeric operations like subtraction.
 *
 * Example:
 * type Numbers = Enumerate<3>; // [0, 1, 2]
 */
export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N ? Acc : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Subtracts two numbers at the type level.
 * Used internally for limiting the depth of nested paths.
 *
 * Example:
 * type Result = Subtract<5, 2>; // 3
 */
export type Subtract<
  A extends number,
  B extends number,
> = Enumerate<A> extends [...Enumerate<B>, ...infer R] ? R['length'] : 0;

/**
 * Recursively extracts nested keys of an object as dot-notation strings with a depth limit.
 * Useful for representing nested object paths in a string format with a maximum depth.
 *
 * Example:
 * type Theme = { colors: { primary: string; secondary: { light: string; dark: string } } };
 * type Paths = NestedKeyPathsWithDepth<Theme['colors'], 2>;
 * "primary" | "secondary.light" | "secondary.dark"

*/
export type NestedKeysPathsWithDepth<T, Depth extends number = 1> = [
  Depth,
] extends [0]
  ? never // Base case: if depth is 0, stop recursion
  : T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends Record<
        string | number,
        unknown
      >
        ? Subtract<Depth, 1> extends 0
          ? never // Stop recursion if depth limit is reached
          : `${K}.${NestedKeysPathsWithDepth<T[K], Subtract<Depth, 1>>}` // Recursive case: dive deeper
        : never; // Invalid case: neither string nor object
    }[keyof T & (string | number)]
  : never;
