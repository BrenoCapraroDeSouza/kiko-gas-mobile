import { useQuery } from '@tanstack/react-query';

import { AddressDTOProps, AddressResponseProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useGetAddresses() {
  async function fetchQuery(): Promise<AddressDTOProps[]> {
    const accessToken = await Storage.getItem('token');

    const { data } = await api.get<AddressResponseProps[]>('/clients/address', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: 1,
        pageSize: 100,
        orderBy: 'desc',
      },
    });

    // TODO: Get to API collaborators add `orderBy: desc`
    return data.reverse().map(address => ({
      ...address,
      id: Math.random().toString(),
    }));
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
