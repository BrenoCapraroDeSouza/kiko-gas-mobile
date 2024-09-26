export type AddButtonVariant = 'add-address' | 'add-gas';

export interface AddButtonProps {
  variant?: AddButtonVariant;
  onPress?: () => void;
}
