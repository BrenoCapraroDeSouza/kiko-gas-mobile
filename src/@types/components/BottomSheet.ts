import { PropsWithChildren } from 'react';

export interface BottomSheetProps extends Required<PropsWithChildren> {
  snaps: string[];
  onClose: () => void;
}
