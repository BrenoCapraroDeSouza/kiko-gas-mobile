import {
  AddButton,
  AddressCard,
  Container,
  EmptyList,
  Header,
} from '@/components';

export function MyAddresses() {
  const ADDRESSES = [
    {
      title: 'Summerland Residence',
      address: 'R. Joaquim Zucco, 400, Centro, Brusque, SC - 88352-195',
    },
    {
      title: 'Summerland Residence',
      address: 'R. Bandeirantes, 22, Centro, Brusque, SC - 88350-000',
    },
  ];

  const hasAddresses = !!ADDRESSES.length;

  return (
    <Container>
      <Header variant='address' />

      {hasAddresses ? (
        ADDRESSES.map((address, index) => (
          <AddressCard key={index} {...address} />
        ))
      ) : (
        <EmptyList variant='address' />
      )}

      <AddButton />
    </Container>
  );
}
