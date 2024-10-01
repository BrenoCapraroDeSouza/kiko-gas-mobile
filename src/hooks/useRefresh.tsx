import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useRefresh() {
  const [isRefreshDone, setIsRefreshDone] = useState<boolean>(false);

  async function fetchMutation(): Promise<void> {
    if (isRefreshDone) return;

    const accessToken = (await Storage.getItem('token')) || '';

    const { data } = await api.post<LoginResponseDTOProps>(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(accessToken)}`,
        },
      },
    );

    await Storage.setItem('token', JSON.stringify(data.token));

    setIsRefreshDone(true);
  }

  const { isError: isRefreshError, mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh'],
    mutationFn: fetchMutation,
    onError: async () => {
      setIsRefreshDone(false);

      await Storage.clear();
    },
  });

  return { isRefreshError, refresh };
}
