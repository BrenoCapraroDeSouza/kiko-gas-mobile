import { useCallback } from 'react';

import { AddressCardProps } from '@/@types';
import {
  AddButton,
  AddressCard,
  Container,
  EmptyList,
  Header,
} from '@/components';

import { List } from './styled';

export function MyAddresses() {
  const renderItem = useCallback(
    (address: Pick<AddressCardProps, 'address' | 'title'>) => (
      <AddressCard {...address} />
    ),
    [],
  );

  // TODO: Change to `id` property
  const keyExtractor = useCallback(
    (address: Pick<AddressCardProps, 'address' | 'title'>) =>
      address.address.toString(),
    [],
  );

  return (
    <Container>
      <Header variant='address' />

      <List
        data={[]}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyList variant='address' />}
      />

      <AddButton />
    </Container>
  );
}
