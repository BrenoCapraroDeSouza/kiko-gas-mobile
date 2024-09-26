import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { InputGenericStyles } from '@/@types';

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: ${RFValue(60)}px;

  align-items: center;

  padding: ${RFValue(12)}px ${RFValue(16)}px;

  gap: ${RFValue(8)}px;

  background-color: ${({ theme }) => theme.colors.content};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const GenericInput = styled.TextInput<InputGenericStyles>`
  flex: 1;

  height: 100%;

  font-size: ${({ theme }) => theme.fontSizes.body}px;
  font-family: ${({ theme }) => theme.fontFamilies.medium};

  color: ${({ theme, readOnly, editable }) =>
    theme.colors[readOnly || !editable ? 'secondary70' : 'secondary']};
`;

export const Button = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;
