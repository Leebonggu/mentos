
// Basic
type Black = '#000000';
type White = '#ffffff';

// Gray
type Gray01 = '#212121';
type Gray02 = '#616161';
type Gray03 = '#888888';
type Gray04 = '#CCCCCC';
type Gray05 = '#EEEEEE';
type Gray06 = '#F5F5F5';

// Primary
type Primary01 = '#7471FF';
type Primary02 = '#CECBEF';
type Primary03 = 'linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%)';

// Secondary
type Secondary01 = '#24DBAF';
type Secondary02 = '#CDF3EA';

export type Colors = 
| Black
| White
| Gray01
| Gray02
| Gray03
| Gray04
| Gray05
| Gray06
| Primary01
| Primary02
| Primary03
| Secondary01
| Secondary02
export interface Basic {
  black: Black;
  white: White;
}

export interface Gray {
  gray_01: Gray01;
  gray_02: Gray02;
  gray_03: Gray03;
  gray_04: Gray04;
  gray_05: Gray05;
  gray_06: Gray06;
}

export interface Primary {
  primary_01: Primary01;
  primary_02: Primary02;
  primary_03: Primary03;
}

export interface Secondary {
  secondary_01: Secondary01;
  secondary_02: Secondary02;
}

export interface Color {
  black: string;
  white: string;
  gray_01: string;
  gray_02: string;
  gray_03: string;
  gray_04: string;
  gray_05: string;
  gray_06: string;
  primary_01: string;
  primary_02: string;
  primary_03: string;
  secondary_01: string;
  secondary_02: string;
}