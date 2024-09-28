import { RouteProp } from '@react-navigation/native';

export type StackRoutesProps = {
  Login: undefined;
};

export type RootRouteProps<RouteName extends keyof StackRoutesProps> =
  RouteProp<StackRoutesProps, RouteName>;
