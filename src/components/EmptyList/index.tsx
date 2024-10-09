import { Record } from 'phosphor-react-native';
import { memo } from 'react';

import { IconVariant } from '@/@types';
import {
  EmptyListProps,
  EmptyListVariant,
} from '@/@types/components/EmptyList';

import Icon from '../Icon';
import Text from '../Text';

function EmptyList(props: EmptyListProps) {
  const { variant = 'adress' } = props;

  const icons: Record<EmptyListVariant, IconVariant> = {
    adress: 'map-trifold',
    gas: 'oven',
  };
  const titles: Record<EmptyListVariant, string> = {
    adress: 'Você ainda não tem endereços',
    gas: 'Não há botijões cadastrados',
  };

  return (
    <>
      <Icon variant={icons[variant]} size='giant' />
      <Text color='secondary' fontSize='body' fontFamily='semiBold' toCenter>
        {titles[variant]}
      </Text>
    </>
  );
}

export default memo(EmptyList);
