import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { AddressProps, UserProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/libs';

export function useCreateAddress() {
  const [isCreateAddressError, setIsCreateAddressError] =
    useState<boolean>(false);

  async function fetchMutation(address: AddressProps): Promise<boolean> {
    const accessToken = await Storage.getItem('token');

    const { data } = await api.patch<UserProps>('/clients/address', address, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return !!data.id;
  }

  const { isPending: isCreatingNewAddress, mutateAsync: createNewAddress } =
    useMutation<boolean, Error, AddressProps>({
      mutationKey: ['create_address'],
      mutationFn: address => fetchMutation(address),
      onError: () => setIsCreateAddressError(true),
    });

  return {
    isCreatingNewAddress,
    isCreateAddressError,
    createNewAddress,
    setIsCreateAddressError,
  };
}
