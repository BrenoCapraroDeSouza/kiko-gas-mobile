export interface BottomSheetDialogProps {
  element: string;
  advertise: string;
  isLoading?: boolean;
  onClose: () => void;
  onAccept?: () => void;
}
