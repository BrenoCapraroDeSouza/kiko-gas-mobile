import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.content};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(24)}px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  gap: ${RFValue(8)}px;
`;

export const Content = styled.View`
  gap: ${RFValue(8)}px;
  width: 90%;
`;

export const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const Button = styled(BorderlessButton)`
  width: 100%;
  height: 100%;
`;

export const ButtonRadioWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  padding: ${RFValue(4)}px;
`;

export const Dot = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  width: 100%;
  height: 100%;
`;

export const ButtonRadio = styled(BorderlessButton)``;
