import { StackRoutesProps } from './routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackRoutesProps {}
  }
}
