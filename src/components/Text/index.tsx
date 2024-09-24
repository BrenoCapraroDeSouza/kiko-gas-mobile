import { memo } from 'react';

import { TextProps } from '@/@types';

import { Typography } from './styled';

function Text(props: TextProps) {
  const {
    children,
    color = 'secondary',
    fontSize = 'body',
    fontFamily = 'regular',
    toCenter = false,
  } = props;

  return (
    <Typography
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      toCenter={toCenter}
    >
      {children}
    </Typography>
  );
}

export default memo(Text);
