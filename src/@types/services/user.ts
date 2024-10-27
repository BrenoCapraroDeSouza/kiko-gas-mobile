import { AddressProps } from '..';

export interface UserProps {
  addresses: AddressProps[];
  id: string;
  name: string;
  phone: string;
  cpfcnpj: string;
  userId: string;
  resaleId: string;
  createdAt: Date;
  updatedAt: Date;
}
