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
