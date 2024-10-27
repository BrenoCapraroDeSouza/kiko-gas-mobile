export type AddButtonVariant = 'add-address' | 'add-cylinder';

export interface AddButtonProps {
  variant?: AddButtonVariant;
  onPress?: () => void;
}
