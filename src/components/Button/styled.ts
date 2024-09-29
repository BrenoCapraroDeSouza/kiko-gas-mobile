import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { ButtonVariant, GenericButtonStyles } from '@/@types';
import { theme } from '@/styles';

const disabledBackgroundColors: Record<ButtonVariant, string> = {
  primary: theme.colors.primary50,
  secondary: theme.colors.secondary70,
};

export const Container = styled.View`
  overflow: hidden;

  width: 100%;
  height: ${RFValue(60)}px;

  border-radius: 4px;
`;

export const GenericButton = styled(RectButton)<GenericButtonStyles>`
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  padding: 0 ${RFValue(16)}px;

  background-color: ${({ theme, variant, isDisabled }) =>
    isDisabled ? disabledBackgroundColors[variant] : theme.colors[variant]};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;
