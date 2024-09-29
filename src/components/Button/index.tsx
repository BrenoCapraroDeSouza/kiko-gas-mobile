import { memo } from 'react';
import { useTheme } from 'styled-components';

import { ButtonProps, ButtonVariant, Colors } from '@/@types';

import Spinner from '../Spinner';
import Text from '../Text';
import { Container, GenericButton } from './styled';

function Button(props: ButtonProps) {
  const {
    title,
    variant = 'primary',
    isDisabled = false,
    isLoading = false,
    onPress,
  } = props;

  const theme = useTheme();

  const isDisabledOrLoading = isDisabled || isLoading;

  const buttonColors: Record<ButtonVariant, Colors> = {
    primary: isDisabledOrLoading ? 'secondary70' : 'secondary',
    secondary: isDisabledOrLoading ? 'primary' : 'primary',
  };

  return (
    <Container>
      <GenericButton
        variant={variant}
        style={theme.boxShadow}
        isDisabled={isDisabledOrLoading}
        onPress={onPress}
      >
        {isLoading ? (
          <Spinner color={buttonColors[variant]} />
        ) : (
          <Text
            color={buttonColors[variant]}
            fontSize='alternative'
            fontFamily='semiBold'
            toCenter
          >
            {title}
          </Text>
        )}
      </GenericButton>
    </Container>
  );
}

export default memo(Button);
