import GorhomBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { forwardRef, memo, useCallback, useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BottomSheetProps } from '@/@types';

import { Container, Content } from './styled';

const BottomSheet = forwardRef<GorhomBottomSheet, BottomSheetProps>(
  (props, ref) => {
    const { snaps, children, enablePanDownToClose = true, onClose } = props;

    const theme = useTheme();

    const handleCloseBottomSheet = useCallback(() => {
      if (!enablePanDownToClose) return;

      onClose();
    }, [enablePanDownToClose, onClose]);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          opacity={0.4}
          onPress={handleCloseBottomSheet}
        />
      ),
      [handleCloseBottomSheet],
    );

    const snapPoints = useMemo(() => [...snaps], [snaps]);

    return (
      <GorhomBottomSheet
        ref={ref}
        index={-1}
        keyboardBehavior='fillParent'
        keyboardBlurBehavior='restore'
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={enablePanDownToClose}
        enableHandlePanningGesture={enablePanDownToClose}
        onClose={handleCloseBottomSheet}
        backgroundStyle={{ backgroundColor: theme.colors.content }}
        handleIndicatorStyle={{
          marginTop: RFValue(8),

          backgroundColor: theme.colors.primary,
        }}
      >
        <Container>
          <Content>{children}</Content>
        </Container>
      </GorhomBottomSheet>
    );
  },
);

export default memo(BottomSheet);
