import { memo } from 'react';
import { useTheme } from 'styled-components';

import { ButtonProps, ButtonVariant, Colors } from '@/@types';

import Icon from '../Icon';
import Spinner from '../Spinner';
import Text from '../Text';
import { Container, Content, GenericButton } from './styled';

function Button(props: ButtonProps) {
  const {
    title,
    variant = 'primary',
    isDisabled = false,
    isLoading = false,
    icon,
    onPress,
  } = props;

  const theme = useTheme();

  const isDisabledOrLoading = isDisabled || isLoading;

  const colors: Record<ButtonVariant, Colors> = {
    primary: isDisabledOrLoading ? 'secondary70' : 'secondary',
    secondary: isDisabledOrLoading ? 'primary' : 'primary',
  };

  return (
    <Container>
      <GenericButton
        variant={variant}
        style={theme.boxShadow}
        isDisabled={isDisabledOrLoading}
        enabled={!isDisabledOrLoading}
        onPress={onPress}
      >
        {isLoading ? (
          <Spinner color={colors[variant]} />
        ) : (
          <Content>
            {icon && <Icon variant={icon} color={colors[variant]} />}

            <Text
              color={colors[variant]}
              fontSize='alternative'
              fontFamily='semiBold'
              toCenter
            >
              {title}
            </Text>
          </Content>
        )}
      </GenericButton>
    </Container>
  );
}

export default memo(Button);
