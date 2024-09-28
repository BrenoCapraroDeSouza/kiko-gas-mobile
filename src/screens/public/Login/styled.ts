import { getBottomSpace } from 'react-native-iphone-screen-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { isIos } from '@/helpers';

export const Content = styled.View`
  flex: 1;

  width: 100%;

  justify-content: center;

  padding: 0 ${RFValue(20)}px;
`;

export const KeyboardEventWrapper = styled.KeyboardAvoidingView.attrs({
  behavior: isIos() ? 'padding' : 'height',
})`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  width: 100%;

  align-items: center;

  padding: ${RFValue(64)}px 0;
`;

export const Logo = styled.Image`
  width: ${RFValue(128)}px;
  height: ${RFValue(128)}px;
`;

export const InputContainer = styled.View`
  flex-grow: 1;

  width: 100%;

  padding-bottom: auto;

  padding-bottom: ${RFValue(20)}px;

  gap: ${RFValue(20)}px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;

  justify-content: flex-end;

  padding-bottom: ${getBottomSpace()}px;
`;
