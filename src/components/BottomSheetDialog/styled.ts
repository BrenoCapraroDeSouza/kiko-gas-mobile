import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const BottomSheetContent = styled.View`
  flex: 1;

  width: 100%;

  gap: ${RFValue(36)}px;
`;

export const DialogContent = styled.View`
  width: 100%;

  align-items: center;

  gap: ${RFValue(24)}px;
`;

export const ButtonContainer = styled.View`
  width: 100%;

  gap: ${RFValue(20)}px;
`;
