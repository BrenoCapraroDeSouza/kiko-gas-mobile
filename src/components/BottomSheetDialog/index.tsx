import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { forwardRef, memo, useCallback } from 'react';

import { BottomSheetDialogProps } from '@/@types';

import BottomSheet from '../BottomSheet';
import Button from '../Button';
import Text from '../Text';
import { BottomSheetContent, ButtonContainer, DialogContent } from './styled';

const BottomSheetDialog = forwardRef<GorhomBottomSheet, BottomSheetDialogProps>(
  (props, ref) => {
    const { element, advertise, isLoading = false, onAccept, onClose } = props;

    const onCloseBottomSheet = useCallback(() => {
      onClose();
    }, [onClose]);

    const onAcceptBottomSheet = useCallback(() => {
      if (onAccept) onAccept();
      onCloseBottomSheet();
    }, [onAccept]);

    return (
      <BottomSheet
        ref={ref}
        snaps={['60%']}
        enablePanDownToClose={!isLoading}
        onClose={onCloseBottomSheet}
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
              onPress={onCloseBottomSheet}
            />
          </ButtonContainer>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
);

export default memo(BottomSheetDialog);
