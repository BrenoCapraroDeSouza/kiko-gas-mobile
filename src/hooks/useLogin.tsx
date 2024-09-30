import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { LoginDTOProps, LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(user: LoginDTOProps): Promise<void> {
    const { data } = await api.post<LoginResponseDTOProps>('/login', user);

    await Storage.setItem('token', JSON.stringify(data.token));
  }

  const {
    isPending: isLoginLoading,
    isSuccess: isLoginSuccess,
    mutateAsync: login,
  } = useMutation<void, Error, LoginDTOProps>({
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
