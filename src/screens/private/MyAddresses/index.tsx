import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { AddressDTOProps } from '@/@types';
import {
  AddButton,
  AddressCard,
  BottomSheet,
  Button,
  Container,
  EmptyList,
  Header,
  Input,
  Spinner,
  Text,
} from '@/components';
import { useCreateAddress, useGetAddresses } from '@/hooks';

import { BottomSheetContent, InputContainer, List } from './styled';

export function MyAddresses() {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<AddressDTOProps>(
    {} as AddressDTOProps,
  );

  const inputAddressRef = useRef<TextInput>(null);
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  const {
    isCreatingNewAddress,
    isCreateAddressError,
    createNewAddress,
    setIsCreateAddressError,
  } = useCreateAddress();
  const { addresses, isAddressesLoading, refreshAddresses } = useGetAddresses();
  const { show } = useToast();

  console.log(isAddressesLoading);

  const isDisabled = !newAddress.name || !newAddress.address;

  function handleSubmitEditing(): void {
    if (inputAddressRef.current) inputAddressRef.current.focus();
  }

  async function onSubmit(): Promise<void> {
    const isCreated = await createNewAddress(newAddress);

    if (isCreated) show('Endereço adicionado!');

    onCloseBottomSheet();
    await refreshAddresses();
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

    setNewAddress({} as AddressDTOProps);
  }, []);

  const renderItem = useCallback(
    (address: AddressDTOProps) => (
      <AddressCard {...address} title={address.name} />
    ),
    [],
  );

  // TODO: Change to `id` property
  const keyExtractor = useCallback(
    (address: AddressDTOProps) => address.address.toString(),
    [],
  );

  useEffect(() => {
    if (isCreateAddressError) {
      setIsCreateAddressError(false);

      show(
        'Tivemos algum problema ao adicionar o seu endereço, tente novamente.',
      );
    }
  }, [isCreateAddressError, setIsCreateAddressError]);

  return (
    <Container>
      <Header variant='address' />

      <List
        data={addresses}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          isAddressesLoading ? <Spinner /> : <EmptyList variant='address' />
        }
      />

      {!isOpenBottomSheet && <AddButton onPress={onOpenBottomSheet} />}

      <BottomSheet
        ref={bottomSheetRef}
        snaps={['70%']}
        enablePanDownToClose={!isCreatingNewAddress}
        onClose={onCloseBottomSheet}
      >
        <BottomSheetContent>
          <Text fontFamily='medium' fontSize='title' toCenter>
            Informe o novo endereço
          </Text>

          <InputContainer>
            <Input
              value={newAddress.name}
              placeholder='Apelido'
              returnKeyType='next'
              isBottomSheetMode
              isDisabled={isCreatingNewAddress}
              onChangeText={name => setNewAddress({ ...newAddress, name })}
              onSubmitEditing={handleSubmitEditing}
            />

            <Input
              ref={inputAddressRef}
              value={newAddress.address}
              variant='address'
              placeholder='Endereço'
              returnKeyType='done'
              isBottomSheetMode
              isDisabled={isCreatingNewAddress}
              onChangeText={address =>
                setNewAddress({ ...newAddress, address })
              }
              onSubmitEditing={onSubmit}
            />
          </InputContainer>

          <View style={{ width: '100%', marginTop: 20 }}>
            <Button
              title='Adicionar'
              isDisabled={isDisabled || isCreatingNewAddress}
              isLoading={isCreatingNewAddress}
              onPress={onSubmit}
            />
          </View>
        </BottomSheetContent>
      </BottomSheet>
    </Container>
  );
}
