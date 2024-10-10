import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { HeaderButtonStyles } from '@/@types';

export const Container = styled.View`
  width: 100%;
  height: auto;

  justify-content: center;
  align-items: flex-start;

  padding: ${RFValue(20)}px;
  padding-top: ${RFValue(64)}px;

  background-color: ${({ theme }) => theme.colors.content};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled(BorderlessButton)<HeaderButtonStyles>`
  position: absolute;

  top: ${RFValue(20)}px;

  ${({ isRight }) =>
    isRight &&
    css`
      right: ${RFValue(20)}px;
    `}

  ${({ isLeft }) =>
    isLeft &&
    css`
      left: ${RFValue(20)}px;
    `}

  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
`;
