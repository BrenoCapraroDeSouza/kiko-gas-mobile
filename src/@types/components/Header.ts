export type HeaderVariant = 'adress' | 'gas';

export interface HeaderProps {
  title?: string;
  variant?: HeaderVariant;
}

export type GenericHeaderStyles = Required<Pick<HeaderProps, 'variant'>>;
