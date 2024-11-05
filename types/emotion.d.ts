import '@emotion/react';
import { Theme as ZendeTheme } from '../src/theme/theme.types';

declare module '@emotion/react' {
  export interface Theme extends ZendeTheme {}
}
