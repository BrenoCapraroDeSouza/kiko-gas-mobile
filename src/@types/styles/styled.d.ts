import 'styled-components';

import { theme } from '@/styles';

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
