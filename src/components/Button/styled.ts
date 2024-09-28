import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { ButtonContainerStyles, ButtonVariant } from '@/@types';
import { theme } from '@/styles';

const disabledBackgroundColors: Record<ButtonVariant, string> = {
  primary: theme.colors.primary50,
  secondary: theme.colors.secondary70,
};

export const Container = styled(RectButton)<ButtonContainerStyles>`
  display: flex;

  width: 100%;
  height: ${RFValue(60)}px;

  justify-content: center;
  align-items: center;

  padding: 0 ${RFValue(16)}px;

  background-color: ${({ theme, variant, isDisabled }) =>
    isDisabled ? disabledBackgroundColors[variant] : theme.colors[variant]};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;
