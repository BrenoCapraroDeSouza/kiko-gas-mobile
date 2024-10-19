import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { AddressCardProps } from '@/@types';
import {
  AddButton,
  AddressCard,
  BottomSheet,
  Button,
  Container,
  EmptyList,
  Header,
  Input,
  Text,
} from '@/components';

import { BottomSheetContent, InputContainer, List } from './styled';

export function MyAddresses() {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);

  const inputAddressRef = useRef<TextInput>(null);
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  function handleSubmitEditing(): void {
    if (inputAddressRef.current) inputAddressRef.current.focus();
  }

  const onOpenBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      setIsOpenBottomSheet(true);
      bottomSheetRef.current.snapToIndex(0);
    }
  }, []);

  const onCloseBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      setIsOpenBottomSheet(false);
      bottomSheetRef.current.close();
    }
  }, []);

  const renderItem = useCallback(
    (address: Pick<AddressCardProps, 'address' | 'title'>) => (
      <AddressCard {...address} />
    ),
    [],
  );

  // TODO: Change to `id` property
  const keyExtractor = useCallback(
    (address: Pick<AddressCardProps, 'address' | 'title'>) =>
      address.address.toString(),
    [],
  );

  return (
    <Container>
      <Header variant='address' />

      <List
        data={[]}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyList variant='address' />}
      />

      {!isOpenBottomSheet && <AddButton onPress={onOpenBottomSheet} />}

      <BottomSheet
        ref={bottomSheetRef}
        snaps={['70%']}
        onClose={onCloseBottomSheet}
      >
        <BottomSheetContent>
          <Text fontFamily='medium' fontSize='title' toCenter>
            Informe o novo endereço
          </Text>

          <InputContainer>
            <Input
              placeholder='Apelido'
              returnKeyType='next'
              isBottomSheetMode
              onSubmitEditing={handleSubmitEditing}
            />

            <Input
              ref={inputAddressRef}
              variant='address'
              placeholder='Endereço'
              returnKeyType='done'
              isBottomSheetMode
            />
          </InputContainer>

          <View style={{ width: '100%', marginTop: 20 }}>
            <Button title='Adicionar' />
          </View>
        </BottomSheetContent>
      </BottomSheet>
    </Container>
  );
}
