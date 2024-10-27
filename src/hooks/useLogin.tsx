import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { CredentialsLoginProps, LoginResponseProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(user: CredentialsLoginProps): Promise<void> {
    const { data } = await api.post<LoginResponseProps>('/login', user);

    await Storage.setItem('token', JSON.stringify(data.token));
  }

  const {
    isPending: isLoginLoading,
    isSuccess: isLoginSuccess,
    mutateAsync: login,
  } = useMutation<void, Error, CredentialsLoginProps>({
    mutationKey: ['login'],
    mutationFn: user => fetchMutation(user),
    onError: () => setIsLoginError(true),
  });

  return {
    isLoginSuccess,
    isLoginLoading,
    isLoginError,
    login,
    setIsLoginError,
  };
}
