import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';

import { LoginDTOProps } from '@/@types';
import { Button, Container, Input } from '@/components';
import { PRIMARY_LOGO } from '@/config';

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

  const [userCredentials, setUserCredentials] = useState({} as LoginDTOProps);

  const inputPasswordRef = useRef<TextInput>(null);

  function navigateToAddress(): void {
    navigation.reset({
      routes: [{ name: 'Address' }],
      routeNames: ['Address'],
      index: 0,
    });
  }

  function onSubmit(): void {
    navigateToAddress();
  }

  function handleSubmitEditing(): void {
    if (inputPasswordRef && inputPasswordRef.current) {
      inputPasswordRef.current.focus();
    }
  }

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
                onSubmitEditing={onSubmit}
              />
            </InputContainer>

            <ButtonWrapper>
              <Button title='Entrar' variant='primary' onPress={onSubmit} />
            </ButtonWrapper>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardEventWrapper>
    </Container>
  );
}
