// Third-Party Libraries
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

//TO BE USED IN REDUX PERSIST
export const reduxPersistStorage = {
  setItem: (key: string, value: boolean | string | number | ArrayBuffer) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<string | null> => {
    const value = storage.getString(key);
    const response = value ?? null;
    return Promise.resolve(response);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};
