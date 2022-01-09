
// Basic
type Black = '#000000';
type White = '#ffffff';

// Gray
type Gray01 = '#212121';
type Gray02 = '#616161';
type Gray03 = '#888888';
type Gray04 = '#cccccc';
type Gray05 = '#eeeeee';
type Gray06 = '#f5f5f5';

// Primary
type Primary01 = '#7471ff';
type Primary02 = '#cecbef';
type Primary03 = '#8148fb';

// Secondary
type Secondary01 = '#24dbaf';
type Secondary02 = '#cdf3ea';

interface Basic {
  black: Black;
  white: White;
}

interface Gray {
  gray_01: Gray01;
  gray_02: Gray02;
  gray_03: Gray03;
  gray_04: Gray04;
  gray_05: Gray05;
  gray_06: Gray06;
}

interface Primary {
  primary_01: Primary01;
  primary_02: Primary02;
  primary_03: Primary03;
}

interface Secondary {
  secondary_01: Secondary01;
  secondary_02: Secondary02;
}

export interface Color {
  basic: Basic;
  gray: Gray;
  primary: Primary;
  secondary: Secondary;
}