import { useNavigation } from '@react-navigation/native';
import { Record } from 'phosphor-react-native';
import { memo, useState } from 'react';

import { IconVariant } from '@/@types';
import { HeaderProps, HeaderVariant } from '@/@types';

import Icon from '../Icon';
import Text from '../Text';
import { Button, Container } from './styled';

function Header(props: HeaderProps) {
  const { variant } = props;

  const navigation = useNavigation();

  const [isEnabledDelete, setIsEnabledDelete] = useState<boolean>(false);

  const isAddress = variant === 'address';
  const isCylinders = variant === 'cylinders';

  const icons: Record<HeaderVariant, IconVariant> = {
    address: isEnabledDelete ? 'x' : 'trash',
    cylinders: 'caret-left',
  };

  const titles: Record<HeaderVariant, string> = {
    address: 'Adicione e veja seus endereços de forma agradável e simples',
    cylinders: 'Gerencie seu gás da melhor maneira!',
  };

  function handleGoBack(): void {
    if (navigation.canGoBack()) navigation.goBack();
  }

  function handlePressDelete(): void {
    setIsEnabledDelete(!isEnabledDelete);
  }

  return (
    <Container>
      {isCylinders && (
        <Button isLeft onPress={handleGoBack}>
          <Icon variant={icons[variant]} size='default' />
        </Button>
      )}

      {isAddress && (
        <Button isRight onPress={handlePressDelete}>
          <Icon variant={icons[variant]} size='default' />
        </Button>
      )}

      <Text color='secondary' fontSize='title' fontFamily='medium'>
        {titles[variant]}
      </Text>
    </Container>
  );
}

export default memo(Header);
