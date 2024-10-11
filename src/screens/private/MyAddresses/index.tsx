import {
  AddButton,
  AddressCard,
  Container,
  EmptyList,
  Header,
} from '@/components';

export function MyAddresses() {
  const userAddresses = [
    {
      id: 0,
      title: 'Summerland Residence',
      streetName: 'R. Joaquim Zucco',
      number: '400',
      neighborhood: 'Centro',
      city: 'Brusque',
      state: 'SC',
      zipCode: '88352-195',
    },
    {
      id: 1,
      title: 'Summerland Residence',
      streetName: 'R. Bandeirantes',
      number: '22',
      neighborhood: 'Centro',
      city: 'Brusque',
      state: 'SC',
      zipCode: '88350-000',
    },
  ];

  const dontHaveAddresses = userAddresses.length === 0;

  return (
    <Container>
      <Header variant='address' />

      {dontHaveAddresses && <EmptyList variant='address' />}
      {userAddresses.map(address => (
        <AddressCard
          key={address.id}
          title={address.title}
          streetName={address.streetName}
          number={address.number}
          neighborhood={address.neighborhood}
          city={address.city}
          state={address.state}
          zipCode={address.zipCode}
        />
      ))}

      <AddButton />
    </Container>
  );
}
