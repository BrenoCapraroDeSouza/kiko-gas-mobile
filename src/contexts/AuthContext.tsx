import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { AuthContextProps } from '@/@types';
import { useRefresh } from '@/hooks/useRefresh';
import { Storage } from '@/libs';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const { isRefreshError, refresh } = useRefresh();

  const [isMakingRefresh, setIsMakingRefresh] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(!!accessToken);

  async function handleAuthenticate(): Promise<void> {
    const newTokenExists = await Storage.getItem('token');
    setIsAuthenticated(!!newTokenExists);
    setIsMakingRefresh(false);
  }

  async function handleLogout(): Promise<void> {
    setIsAuthenticated(false);
    setIsMakingRefresh(false);

    await Storage.clear();
  }

  useEffect(() => {
    refresh();
    handleAuthenticate();
  }, [accessToken, refresh]);

  useEffect(() => {
    if (isRefreshError) handleLogout();
  }, [isRefreshError]);

  useEffect(() => {
    async function getToken(): Promise<void> {
      const token = await Storage.getItem('token');

      setAccessToken(token || '');
    }

    getToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isMakingRefresh,
        handleAuthenticate,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
