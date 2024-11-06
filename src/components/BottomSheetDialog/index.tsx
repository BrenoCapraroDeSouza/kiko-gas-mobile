import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { memo, useCallback, useEffect, useRef } from 'react';

import { BottomSheetDialogProps } from '@/@types';

import { BottomSheet, Button, Text } from '..';
import { BottomSheetContent, ButtonContainer, DialogContent } from './styled';

function BottomSheetDialog(props: BottomSheetDialogProps) {
  const {
    isOpen,
    element,
    advertise,
    isLoading = false,
    onAccept,
    onClose,
  } = props;

  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  const onOpenBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) bottomSheetRef.current.snapToIndex(0);
  }, []);

  const onCloseBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) bottomSheetRef.current.close();
    onClose();
  }, []);

  const onAcceptBottomSheet = useCallback(() => {
    if (onAccept) onAccept();
    onCloseBottomSheet();
  }, []);

  useEffect(() => {
    if (isOpen) onOpenBottomSheet();
    else onCloseBottomSheet();
  }, [isOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snaps={['50%']}
      enablePanDownToClose={!isLoading}
      onClose={onClose}
    >
      <BottomSheetContent>
        <DialogContent>
          <Text fontFamily='medium' fontSize='title' toCenter>
            {element}
          </Text>

          <Text fontFamily='medium' toCenter>
            {advertise}
          </Text>
        </DialogContent>

        <ButtonContainer>
          <Button
            variant='secondary'
            title='Sim'
            isDisabled={isLoading}
            isLoading={isLoading}
            onPress={onAcceptBottomSheet}
          />

          <Button
            title='Não'
            isDisabled={false}
            onPress={onAcceptBottomSheet}
          />
        </ButtonContainer>
      </BottomSheetContent>
    </BottomSheet>
  );
}

export default memo(BottomSheetDialog);
