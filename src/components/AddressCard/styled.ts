import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.content};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;

export const Card = styled(RectButton)`
  flex-direction: row;

  width: 100%;
  height: auto;

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
  gap: ${RFValue(8)}px;

  border-radius: 8px;
`;

export const Content = styled.View`
  width: 83.33%;
  gap: ${RFValue(16)}px;
`;

export const AddressTitleWrapper = styled.View`
  flex-direction: row;

  gap: ${RFValue(8)}px;
`;

export const AddressWrapper = styled.View`
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  flex: 1;

  align-items: flex-end;
`;

export const Radio = styled.View`
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 9999px;
`;

export const Dot = styled.View`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
`;
