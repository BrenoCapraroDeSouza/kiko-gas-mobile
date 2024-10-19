import { useQuery } from '@tanstack/react-query';

import { AddressDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useGetAddresses() {
  async function fetchQuery(): Promise<AddressDTOProps[]> {
    const accessToken = await Storage.getItem('token');

    const { data } = await api.get<AddressDTOProps[]>('/clients/address', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: 1,
        pageSize: 100,
        orderBy: 'desc',
      },
    });

    return data;
  }

  const {
    isLoading,
    isFetching,
    data: addresses,
    refetch: refreshAddresses,
  } = useQuery({
    queryKey: ['addresses'],
    initialData: [],
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: 'always',
    queryFn: fetchQuery,
  });

  return {
    addresses: addresses,
    isAddressesLoading: isLoading || isFetching,
    refreshAddresses,
  };
}
