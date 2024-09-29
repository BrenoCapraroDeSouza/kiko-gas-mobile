import { setStringAsync } from 'expo-clipboard';
import { ForwardedRef, forwardRef, memo, useState } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { useTheme } from 'styled-components';

import { InputProps, InputTextContentType, InputVariant } from '@/@types';

import Icon from '../Icon';
import { Button, Container, GenericInput } from './styled';

const Input = forwardRef((props: InputProps, ref?: ForwardedRef<TextInput>) => {
  const {
    variant = 'text',
    returnKeyType = 'default',
    value = '',
    placeholder = '',
    isDisabled = false,
    onChangeText,
    onSubmitEditing,
  } = props;

  const theme = useTheme();

  const [isVisibleText, setIsVisibleText] = useState<boolean>(
    variant !== 'password',
  );

  function handleVisibilityChange(): void {
    setIsVisibleText(!isVisibleText);
  }

  async function handleCopyInputText(): Promise<void> {
    await setStringAsync(value);
  }

  const isCopy = variant === 'copy';
  const isPassword = variant === 'password';
  const keyboardType: KeyboardTypeOptions =
    variant === 'email' ? 'email-address' : 'default';

  const textContentTypes: Record<InputVariant, InputTextContentType> = {
    address: 'fullStreetAddress',
    email: 'emailAddress',
    password: isVisibleText ? undefined : 'password',
    copy: undefined,
    text: undefined,
  };

  return (
    <Container>
      <GenericInput
        ref={ref}
        value={value}
        editable={!isDisabled}
        readOnly={isDisabled || isCopy}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        textContentType={textContentTypes[variant]}
        keyboardType={keyboardType}
        secureTextEntry={!isVisibleText}
        keyboardAppearance='dark'
        cursorColor={theme.colors.secondary}
        placeholderTextColor={theme.colors.secondary70}
        selectionColor={theme.colors.secondary}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />

      {isPassword && (
        <Button
          enabled={!isDisabled}
          activeOpacity={0.7}
          onPress={handleVisibilityChange}
        >
          <Icon
            variant={isVisibleText ? 'eye-slash' : 'eye'}
            color={isDisabled ? 'secondary70' : 'secondary'}
          />
        </Button>
      )}

      {isCopy && (
        <Button
          enabled={!isDisabled}
          activeOpacity={0.7}
          onPress={handleCopyInputText}
        >
          <Icon
            variant='copy-simple'
            color={isDisabled ? 'secondary70' : 'secondary'}
          />
        </Button>
      )}
    </Container>
  );
});

export default memo(Input);
