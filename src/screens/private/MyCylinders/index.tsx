import { AddButton, Container, CylinderCard, Header } from '@/components';

export function MyCylinders() {
  return (
    <Container>
      <Header variant='cylinders' />

      <CylinderCard
        name='P5'
        description='Residencial'
        status='in-use'
        tare={94}
      />

      <CylinderCard
        name='P20'
        description='Industrial'
        status='replenishment'
        tare={0.1}
      />

      <AddButton variant='add-cylinder' />
    </Container>
  );
}
