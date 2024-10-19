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
    const { snaps, children, onClose } = props;

    const theme = useTheme();

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.4}
          onPress={onClose}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
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
        enablePanDownToClose
        onClose={onClose}
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
