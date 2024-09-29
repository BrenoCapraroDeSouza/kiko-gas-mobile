import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { LoginDTOProps, LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';

export function useLogin() {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  async function fetchMutation(
    user: LoginDTOProps,
  ): Promise<LoginResponseDTOProps> {
    const { data } = await api.post<LoginResponseDTOProps>('/login', user);

    return data;
  }

  const {
    isPending: isLoginLoading,
    isSuccess: isLoginSuccess,
    mutateAsync: login,
  } = useMutation<LoginResponseDTOProps, Error, LoginDTOProps>({
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
