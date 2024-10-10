export type HeaderVariant = 'address' | 'gas';

export interface HeaderProps {
  variant: HeaderVariant;
}

export interface HeaderButtonStyles {
  isRight?: boolean;
  isLeft?: boolean;
}
