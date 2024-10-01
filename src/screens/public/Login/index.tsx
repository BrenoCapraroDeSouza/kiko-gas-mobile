import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { LoginDTOProps } from '@/@types';
import { Button, Container, Input } from '@/components';
import { PRIMARY_LOGO } from '@/config';
import { useAuth, useLogin } from '@/hooks';

import {
  ButtonWrapper,
  Content,
  ImageWrapper,
  InputContainer,
  KeyboardEventWrapper,
  Logo,
} from './styled';

export function Login() {
  const navigation = useNavigation();
  const { show } = useToast();
  const { changeToLogged } = useAuth();
  const {
    isLoginError,
    isLoginLoading,
    isLoginSuccess,
    setIsLoginError,
    login,
  } = useLogin();

  const [userCredentials, setUserCredentials] = useState({} as LoginDTOProps);

  const inputPasswordRef = useRef<TextInput>(null);

  function navigateToMyAddresses(): void {
    navigation.reset({
      routes: [{ name: 'MyAddresses' }],
      routeNames: ['MyAddresses'],
      index: 0,
    });
  }

  function handleSubmitEditing(): void {
    if (inputPasswordRef && inputPasswordRef.current) {
      inputPasswordRef.current.focus();
    }
  }

  async function onSubmit(): Promise<void> {
    await login(userCredentials);

    await changeToLogged();
  }

  useEffect(() => {
    if (isLoginError) {
      setIsLoginError(false);

      show('Verifique suas credenciais e tente novamente.');
    }
  }, [isLoginError, setIsLoginError]);

  useEffect(() => {
    if (isLoginSuccess) navigateToMyAddresses();
  }, [isLoginSuccess]);

  return (
    <Container>
      <KeyboardEventWrapper>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <ImageWrapper>
              <Logo source={PRIMARY_LOGO} resizeMode='contain' />
            </ImageWrapper>

            <InputContainer>
              <Input
                value={userCredentials?.email}
                variant='email'
                placeholder='E-mail'
                returnKeyType='next'
                onChangeText={email =>
                  setUserCredentials({ ...userCredentials, email })
                }
                onSubmitEditing={handleSubmitEditing}
                isDisabled={isLoginLoading}
              />

              <Input
                ref={inputPasswordRef}
                value={userCredentials?.password}
                variant='password'
                placeholder='Senha'
                returnKeyType='send'
                onChangeText={password =>
                  setUserCredentials({ ...userCredentials, password })
                }
                onSubmitEditing={async () => await onSubmit()}
                isDisabled={isLoginLoading}
              />
            </InputContainer>

            <ButtonWrapper>
              <Button
                title='Entrar'
                variant='primary'
                onPress={async () => await onSubmit()}
                isDisabled={isLoginLoading}
                isLoading={isLoginLoading}
              />
            </ButtonWrapper>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardEventWrapper>
    </Container>
  );
}
