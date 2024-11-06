export type BottomSheetDialogVariant = 'address' | 'cylinder';

export interface BottomSheetDialogInfoProps {
  id: string;
  name: string;
  variant: BottomSheetDialogVariant;
}

export interface BottomSheetDialogContextProps {
  handleOpen: (info: BottomSheetDialogInfoProps) => void;
}
