import { Colors } from '@/@types';

export type IconVariant =
  | 'eye-slash'
  | 'eye'
  | 'trash'
  | 'arrows-counter-clockwise'
  | 'caret-left'
  | 'caret-right'
  | 'map-trifold'
  | 'map-pin-plus'
  | 'plus-circle'
  | 'battery-vertical-full'
  | 'battery-vertical-high'
  | 'battery-vertical-medium'
  | 'battery-vertical-low'
  | 'battery-warning-vertical'
  | 'battery-vertical-empty'
  | 'oven'
  | 'copy-simple'
  | 'check-circle'
  | 'pix-logo'
  | 'money'
  | 'x';

export type IconSize = 'default' | 'large' | 'x-large' | 'giant';

export interface IconProps {
  variant: IconVariant;
  color?: Colors;
  size?: IconSize;
}
