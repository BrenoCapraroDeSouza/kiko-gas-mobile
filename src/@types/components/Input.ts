import { ForwardedRef } from 'react';
import { ReturnKeyTypeOptions, TextInput } from 'react-native';

export type InputTextContentType =
  | 'emailAddress'
  | 'password'
  | 'fullStreetAddress'
  | undefined;

export type InputVariant = 'text' | 'password' | 'email' | 'copy' | 'address';

export interface InputProps {
  variant?: InputVariant;
  value?: string;
  placeholder?: string;
  isDisabled?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText?: (value: string) => void;
}

export interface InputGenericStyles {
  ref?: ForwardedRef<TextInput>;
}
