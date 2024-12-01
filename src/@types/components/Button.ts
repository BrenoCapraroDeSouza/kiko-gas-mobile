import { IconVariant } from './Icon';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  title: string;
  icon?: IconVariant;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export type GenericButtonStyles = Required<
  Pick<ButtonProps, 'variant' | 'isDisabled'>
>;
