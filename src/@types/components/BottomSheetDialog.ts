export interface BottomSheetDialogProps {
  isOpen: boolean;
  element: string;
  advertise: string;
  isLoading?: boolean;
  onClose: () => void;
  onAccept?: () => void;
}
