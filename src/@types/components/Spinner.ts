import { Colors } from '..';

export type SpinnerSizes = 'small' | 'large';

export interface SpinnerProps {
  color?: Colors;
  size?: SpinnerSizes;
}
