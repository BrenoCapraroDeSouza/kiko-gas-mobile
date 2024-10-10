import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  margin: auto;

  padding: ${RFValue(20)}px;

  gap: ${RFValue(8)}px;
`;
