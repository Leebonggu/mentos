// import original module declarations
import 'styled-components';
import { Color } from './color';
import { Typography } from './typography';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}