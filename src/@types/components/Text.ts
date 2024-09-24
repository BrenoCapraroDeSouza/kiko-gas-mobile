import { PropsWithChildren } from 'react';

import { Colors, FontFamilies, FontSizes } from '..';

export interface TextProps extends PropsWithChildren {
  fontSize?: FontSizes;
  fontFamily?: FontFamilies;
  color?: Colors;
  toCenter?: boolean;
}

export type TextStyles = Required<Omit<TextProps, 'children'>>;
