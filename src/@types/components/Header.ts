export type HeaderVariant = 'address' | 'cylinders';

export interface HeaderProps {
  variant: HeaderVariant;
}

export interface HeaderButtonStyles {
  isRight?: boolean;
  isLeft?: boolean;
}
