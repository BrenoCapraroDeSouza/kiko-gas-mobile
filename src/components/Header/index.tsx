import { Record } from 'phosphor-react-native';
import { memo } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { IconVariant } from '@/@types';
import { HeaderProps, HeaderVariant } from '@/@types/components/Header';
import { theme } from '@/styles';

import Icon from '../Icon';
import Text from '../Text';

function Header(props: HeaderProps) {
  const { variant = 'adress' } = props;

  const icons: Record<HeaderVariant, IconVariant> = {
    adress: 'trash',
    gas: 'caret-left',
  };
  const titles: Record<HeaderVariant, string> = {
    adress: 'Adicione e veja seus endereços de forma agradável e simples',
    gas: 'Gerencie seu gás da melhor maneira!',
  };

  return (
    <View
      style={{
        flex: 0.4,
        borderBottomWidth: RFValue(2),
        borderBottomColor: theme.colors.secondary,
        justifyContent: 'center',
        backgroundColor: theme.colors.content,
      }}
    >
      <View style={{ alignItems: 'flex-end', padding: RFValue(20) }}>
        <Icon variant={icons[variant]} size='default' />
      </View>
      <View style={{ paddingHorizontal: RFValue(42) }}>
        <Text color='secondary' fontSize='title' fontFamily='semiBold'>
          {titles[variant]}
        </Text>
      </View>
    </View>
  );
}

export default memo(Header);
