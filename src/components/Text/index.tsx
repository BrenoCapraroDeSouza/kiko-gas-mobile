import { memo } from 'react';

import { TextProps } from '@/@types';

import { Typography } from './styled';

function Text(props: TextProps) {
  const {
    children,
    color = 'secondary',
    fontSize = 'body',
    fontFamily = 'regular',
    isGrow = false,
    toCenter = false,
    numberOfLines,
    ellipsizeMode,
  } = props;

  return (
    <Typography
      isGrow={isGrow}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      toCenter={toCenter}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Typography>
  );
}

export default memo(Text);
