import { setStringAsync } from 'expo-clipboard';
import { forwardRef, memo, useState } from 'react';
import { KeyboardTypeOptions, TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { InputProps, InputTextContentType, InputVariant } from '@/@types';

import Icon from '../Icon';
import { BottomSheetInput, Button, Container, GenericInput } from './styled';

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    variant = 'text',
    returnKeyType = 'default',
    value = '',
    placeholder = '',
    isDisabled = false,
    isBottomSheetMode = false,
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

  const commonInputProps: TextInputProps = {
    value,
    placeholder,
    returnKeyType,
    keyboardType,
    editable: !isDisabled,
    readOnly: isDisabled || isCopy,
    textContentType: textContentTypes[variant],
    secureTextEntry: !isVisibleText,
    keyboardAppearance: 'dark',
    cursorColor: theme.colors.secondary,
    placeholderTextColor: theme.colors.secondary70,
    selectionColor: theme.colors.secondary,
    onChangeText,
    onSubmitEditing,
  };

  return (
    <Container>
      {isBottomSheetMode ? (
        <BottomSheetInput ref={ref} {...commonInputProps} />
      ) : (
        <GenericInput ref={ref} {...commonInputProps} />
      )}

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
