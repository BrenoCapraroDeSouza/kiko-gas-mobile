import { AddButton, Container, EmptyList, Header } from '@/components';

export function MyCylinders() {
  return (
    <Container>
      <Header variant='cylinders' />

      <EmptyList variant='gas' />

      <AddButton variant='add-cylinder' />
    </Container>
  );
}
