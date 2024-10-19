import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(BottomSheetView)`
  flex: 1;

  background-color: ${props => props.theme.colors.content};
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;

  align-items: center;

  padding: ${RFValue(28)}px ${RFValue(20)}px;
`;
