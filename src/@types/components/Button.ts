export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export type ButtonContainerStyles = Required<
  Pick<ButtonProps, 'variant' | 'isDisabled'>
>;
