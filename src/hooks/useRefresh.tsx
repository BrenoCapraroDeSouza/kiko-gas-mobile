import { useMutation } from '@tanstack/react-query';

import { LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useRefresh() {
  async function fetchMutation(): Promise<boolean> {
    const accessToken = (await Storage.getItem('token')) || '';

    const { data } = await api.post<LoginResponseDTOProps>(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    await Storage.setItem('token', JSON.stringify(data.token));

    return !!data.token;
  }

  const { isError: isRefreshError, mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh'],
    mutationFn: fetchMutation,
    onError: async () => {
      await Storage.clear();
    },
  });

  return { isRefreshError, refresh };
}
