import { RouteProp } from '@react-navigation/native';

export type StackRoutesProps = {
  Login: undefined;
  MyAddresses: undefined;
  MyCylinders: undefined;
};

export type RootRouteProps<RouteName extends keyof StackRoutesProps> =
  RouteProp<StackRoutesProps, RouteName>;
