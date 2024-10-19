import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-screen-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { AddressCardProps } from '@/@types';
import { isIos } from '@/helpers';

export const List = styled(
  FlatList as new (
    props: FlatListProps<Pick<AddressCardProps, 'title' | 'address'>>,
  ) => FlatList<Pick<AddressCardProps, 'title' | 'address'>>,
).attrs({
  contentContainerStyle: {
    flexGrow: 1,

    paddingTop: RFValue(20),
    paddingHorizontal: RFValue(20),
    paddingBottom: isIos() ? getBottomSpace() : RFValue(20),

    gap: RFValue(20),
  },
  showsVerticalScrollIndicator: false,
})``;

export const BottomSheetContent = styled.View`
  flex: 1;

  width: 100%;
`;

export const InputContainer = styled.View`
  flex: 1;

  width: 100%;

  margin: ${RFValue(32)}px 0;

  gap: ${RFValue(20)}px;
`;
