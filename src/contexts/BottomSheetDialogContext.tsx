import GorhomBottomSheet from '@gorhom/bottom-sheet';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  BottomSheetDialogContextProps,
  BottomSheetDialogInfoProps,
  BottomSheetDialogVariant,
} from '@/@types';
import { BottomSheetDialog } from '@/components';

export const BottomSheetDialogContext = createContext(
  {} as BottomSheetDialogContextProps,
);

export function BottomSheetDialogProvider({
  children,
}: Required<PropsWithChildren>) {
  const [bottomSheetDialogInfo, setBottomSheetDialogInfo] =
    useState<BottomSheetDialogInfoProps>({} as BottomSheetDialogInfoProps);

  const bottomSheetDialogRef = useRef<GorhomBottomSheet>(null);

  const handleCloseBottomSheetDialog = useCallback(() => {
    setBottomSheetDialogInfo({} as BottomSheetDialogInfoProps);

    if (bottomSheetDialogRef.current) {
      bottomSheetDialogRef.current.close();
    }
  }, []);

  const handleConfirmBottomSheetDialog = useCallback(() => {
    handleCloseBottomSheetDialog();
  }, []);

  const handleOpenBottomSheetDialog = useCallback(
    (info: BottomSheetDialogInfoProps) => {
      setBottomSheetDialogInfo(info);

      if (bottomSheetDialogRef.current) {
        bottomSheetDialogRef.current.snapToIndex(0);
      }
    },
    [],
  );

  const elements: Record<BottomSheetDialogVariant, string> = useMemo(
    () => ({
      address: 'Excluir endereço?',
      cylinder: `Recolher o gás ${bottomSheetDialogInfo?.name}?`,
    }),
    [bottomSheetDialogInfo],
  );

  const advertises: Record<BottomSheetDialogVariant, string> = useMemo(
    () => ({
      address: `Tem certeza que deseja excluir o endereço ${bottomSheetDialogInfo?.name}?`,
      cylinder: `Tem certeza que deseja recolher o gás ${bottomSheetDialogInfo?.name}?`,
    }),
    [bottomSheetDialogInfo],
  );

  const element = elements[bottomSheetDialogInfo?.variant];
  const advertise = advertises[bottomSheetDialogInfo?.variant];

  return (
    <BottomSheetDialogContext.Provider
      value={{ handleOpen: handleOpenBottomSheetDialog }}
    >
      {children}

      <BottomSheetDialog
        ref={bottomSheetDialogRef}
        element={element}
        advertise={advertise}
        onClose={handleCloseBottomSheetDialog}
        onAccept={handleConfirmBottomSheetDialog}
      />
    </BottomSheetDialogContext.Provider>
  );
}
