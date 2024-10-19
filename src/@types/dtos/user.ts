import { AddressDTOProps } from './address';

export interface UserDTOProps {
  addresses: AddressDTOProps[];
  id: string;
  name: string;
  phone: string;
  cpfcnpj: string;
  userId: string;
  resaleId: string;
  createdAt: Date;
  updatedAt: Date;
}
