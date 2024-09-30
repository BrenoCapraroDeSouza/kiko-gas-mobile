import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKey, AsyncStorageProps } from '@/@types';

export const Storage: AsyncStorageProps = {
  async clear(): Promise<void> {
    await AsyncStorage.clear();
  },

  async getItem(key: AsyncStorageKey): Promise<string | null> {
    const data = await AsyncStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  },

  async setItem(key: AsyncStorageKey, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  },
};
