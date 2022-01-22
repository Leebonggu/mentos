// import original module declarations
import 'styled-components';
import { Color } from './color';
import { Typography } from './typography';
import { Basic } from '@styles/color';
import { Size, Weight } from '@styles/typography';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}