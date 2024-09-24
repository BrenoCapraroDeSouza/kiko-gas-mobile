import styled from 'styled-components/native';

import { TextStyles } from '@/@types';

export const Typography = styled.Text<TextStyles>`
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]}px;
  font-family: ${({ theme, fontFamily }) => theme.fontFamilies[fontFamily]};

  color: ${({ theme, color }) => theme.colors[color]};

  text-align: ${({ toCenter }) => (toCenter ? 'center' : 'left')};
`;
