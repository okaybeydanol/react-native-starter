// Recursive type to extract deep keys
export type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${Extract<K, string>}.${NestedKeys<T[K]>}`
    : Extract<K, string>;
}[keyof T];
