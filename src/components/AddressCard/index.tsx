import { memo } from 'react';

import { AddressCardProps } from '@/@types';

import Icon from '../Icon';
import Text from '../Text';
import {
  Button,
  ButtonRadio,
  ButtonRadioWrapper,
  ButtonWrapper,
  Container,
  Content,
  Dot,
} from './styled';

function AddressCard(props: AddressCardProps) {
  const Address = props;

  const mapIcon = 'map-trifold';

  const isEnabledDelete = true;
  const isEnabledEdit = false;

  return (
    <Container>
      <Content>
        <Text color='primary' fontSize='small' fontFamily='semiBold'>
          <Icon variant={mapIcon} size='small' color='primary' />
          {'  '}
          {Address.title}
        </Text>
        <Text color='secondary' fontSize='small' fontFamily='regular'>
          {Address.streetName}, {Address.number}, {Address.neighborhood},{' '}
          {Address.city} - {Address.state}, {Address.zipCode}
        </Text>
      </Content>
      {isEnabledEdit && (
        <ButtonWrapper>
          <Button>
            <Icon variant={'caret-right'} size='small' color='secondary' />
          </Button>
        </ButtonWrapper>
      )}
      {isEnabledDelete && (
        <ButtonRadioWrapper>
          <ButtonRadio />
          <Dot />
        </ButtonRadioWrapper>
      )}
    </Container>
  );
}

export default memo(AddressCard);
