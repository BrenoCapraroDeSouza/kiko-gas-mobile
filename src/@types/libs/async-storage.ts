export type AsyncStorageKey = 'token';

export interface AsyncStorageProps {
  getItem: (key: AsyncStorageKey) => Promise<string | null>;
  setItem: (key: AsyncStorageKey, value: string) => Promise<void>;
  clear(): Promise<void>;
}
