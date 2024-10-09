export type EmptyListVariant = 'adress' | 'gas';

export interface EmptyListProps {
  title?: string;
  variant?: EmptyListVariant;
}

export type GenericEmptyListStyles = Required<Pick<EmptyListProps, 'variant'>>;
