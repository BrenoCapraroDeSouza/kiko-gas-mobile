import { Record } from 'phosphor-react-native';
import { memo } from 'react';

import { IconVariant } from '@/@types';
import { EmptyListProps, EmptyListVariant } from '@/@types';

import Icon from '../Icon';
import Text from '../Text';
import { Container } from './styled';

function EmptyList(props: EmptyListProps) {
  const { variant } = props;

  const icons: Record<EmptyListVariant, IconVariant> = {
    address: 'map-trifold',
    gas: 'oven',
  };

  const titles: Record<EmptyListVariant, string> = {
    address: 'Você ainda não tem endereços',
    gas: 'Não há botijões cadastrados',
  };

  return (
    <Container>
      <Icon variant={icons[variant]} size='giant' />

      <Text color='secondary' fontSize='body' fontFamily='semiBold' toCenter>
        {titles[variant]}
      </Text>
    </Container>
  );
}

export default memo(EmptyList);
