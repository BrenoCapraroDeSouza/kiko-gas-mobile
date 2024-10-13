import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-screen-helper';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { isIos } from '@/helpers';

const BorderlessButtonAnimated =
  Animated.createAnimatedComponent(BorderlessButton);

export const ButtonWrapper = styled(Animated.View)`
  z-index: 99;

  position: absolute;

  right: ${RFValue(20)}px;
  bottom: ${isIos() ? getBottomSpace() : RFValue(20)}px;

  display: flex;

  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 9999px;
`;

export const Button = styled(BorderlessButtonAnimated)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  border-radius: 9999px;
`;
