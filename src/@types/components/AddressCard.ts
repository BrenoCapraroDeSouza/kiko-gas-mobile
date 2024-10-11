export type AddressCardMode = 'default' | 'select';

export interface AddressCardProps {
  title: string;
  address: string;
  mode?: AddressCardMode;
  onPress?: () => void;
}
