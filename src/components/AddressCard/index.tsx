import { memo, useState } from 'react';

import { AddressCardProps } from '@/@types';

import Icon from '../Icon';
import Text from '../Text';
import {
  AddressTitleWrapper,
  AddressWrapper,
  Card,
  Container,
  Content,
  Dot,
  IconWrapper,
  Radio,
} from './styled';

function AddressCard(props: AddressCardProps) {
  const { mode = 'select', address, title, onPress } = props;

  const [isSelected, setIsSelected] = useState<boolean>(true);

  const isDefault = mode === 'default';

  function handlePressCard(): void {
    if (!isDefault) setIsSelected(!isSelected);
    if (onPress) onPress();
  }

  return (
    <Container>
      <Card onPress={handlePressCard}>
        <Content>
          <AddressTitleWrapper>
            <Icon variant='map-trifold' color='primary' />

            <Text color='primary' fontFamily='semiBold'>
              {title}
            </Text>
          </AddressTitleWrapper>

          <AddressWrapper>
            <Text fontFamily='regular'>{address}</Text>
          </AddressWrapper>
        </Content>

        <IconWrapper>
          {isDefault ? (
            <Icon variant='caret-right' />
          ) : (
            <Radio>{isSelected && <Dot />}</Radio>
          )}
        </IconWrapper>
      </Card>
    </Container>
  );
}

export default memo(AddressCard);
