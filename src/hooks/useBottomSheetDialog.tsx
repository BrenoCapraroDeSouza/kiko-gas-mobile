import { useContext } from 'react';

import { BottomSheetDialogContextProps } from '@/@types';
import { BottomSheetDialogContext } from '@/contexts';

export function useBottomSheetDialog(): BottomSheetDialogContextProps {
  return useContext(BottomSheetDialogContext);
}
