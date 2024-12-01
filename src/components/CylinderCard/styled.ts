import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { CylinderCardContainerStyles } from '@/@types';

export const Container = styled.View<CylinderCardContainerStyles>`
  width: 100%;
  height: ${RFValue(192)}px;

  align-items: center;

  padding: ${RFValue(20)}px;

  gap: ${RFValue(12)}px;

  background-color: ${props => props.theme.colors.content};

  border-width: 1px;
  border-color: ${props =>
    props.theme.colors[props.isReplenishment ? 'secondary70' : 'secondary']};
  border-radius: 8px;
`;

export const CylinderPresentation = styled.View`
  flex-direction: row;

  width: 100%;

  gap: ${RFValue(4)}px;
`;

export const ActionButton = styled(BorderlessButton)``;

export const Content = styled.View`
  width: 100%;

  gap: ${RFValue(24)}px;
`;
