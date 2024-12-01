import { PropsWithChildren } from 'react';

import { Colors, FontFamilies, FontSizes } from '..';

export type TextEllipsizeModeType = 'head' | 'clip' | 'middle' | 'tail';

export interface TextProps extends PropsWithChildren {
  isGrow?: boolean;
  toCenter?: boolean;
  numberOfLines?: number;
  fontSize?: FontSizes;
  fontFamily?: FontFamilies;
  color?: Colors;
  ellipsizeMode?: TextEllipsizeModeType;
}

export type TextStyles = Required<
  Omit<TextProps, 'children' | 'numberOfLines' | 'ellipsizeMode'>
>;
