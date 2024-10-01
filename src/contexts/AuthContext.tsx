import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { AuthContextProps } from '@/@types';
import { useRefresh } from '@/hooks';
import { Storage } from '@/libs';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const { isRefreshError, refresh } = useRefresh();

  const [accessToken, setAccessToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(!!accessToken);

  async function changeToLogged(): Promise<void> {
    const newTokenExists = await Storage.getItem('token');
    setIsAuthenticated(!!newTokenExists);
  }

  async function handleLogout(): Promise<void> {
    setIsAuthenticated(false);

    await Storage.clear();
  }

  useEffect(() => {
    if (accessToken) refresh();
  }, [accessToken, refresh]);

  useEffect(() => {
    if (isRefreshError) handleLogout();
  }, [isRefreshError]);

  useEffect(() => {
    async function getToken(): Promise<void> {
      const token = await Storage.getItem('token');

      setAccessToken(token || '');
      setIsAuthenticated(!!token);
    }

    getToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, changeToLogged, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
