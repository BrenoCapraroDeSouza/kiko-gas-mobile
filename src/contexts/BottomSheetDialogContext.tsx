import { createContext, PropsWithChildren, useMemo, useState } from 'react';

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

  function handleConfirmBottomSheetDialog(): void {
    setBottomSheetDialogInfo({} as BottomSheetDialogInfoProps);
  }

  function handleCloseBottomSheetDialog(): void {
    setBottomSheetDialogInfo({} as BottomSheetDialogInfoProps);
  }

  function handleOpenBottomSheetDialog(info: BottomSheetDialogInfoProps): void {
    setBottomSheetDialogInfo(info);
  }

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

  const isOpen = !!bottomSheetDialogInfo?.id;
  const element = elements[bottomSheetDialogInfo?.variant];
  const advertise = advertises[bottomSheetDialogInfo?.variant];

  return (
    <BottomSheetDialogContext.Provider
      value={{ handleOpen: handleOpenBottomSheetDialog }}
    >
      {children}

      <BottomSheetDialog
        isOpen={isOpen}
        element={element}
        advertise={advertise}
        onClose={handleCloseBottomSheetDialog}
        onAccept={handleConfirmBottomSheetDialog}
      />
    </BottomSheetDialogContext.Provider>
  );
}
