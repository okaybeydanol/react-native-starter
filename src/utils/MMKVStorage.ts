// Third-Party Libraries
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

//TO BE USED IN ZUSTAND PERSIST
export const zustandPersistStorage = {
  setItem: (key: string, value: boolean | string | number | ArrayBuffer) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<string | null> => {
    const value = storage.getString(key);
    const response = value ?? null;
    return Promise.resolve(response);
  },
  removeItem: async (key: string): Promise<boolean> => {
    storage.delete(key);
    return true;
  },
};
