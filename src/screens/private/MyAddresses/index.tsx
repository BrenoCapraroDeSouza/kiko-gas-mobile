import { AddButton, Container, EmptyList, Header } from '@/components';

export function MyAddresses() {
  return (
    <Container>
      <Header variant='address' />

      <EmptyList variant='address' />

      <AddButton />
    </Container>
  );
}
