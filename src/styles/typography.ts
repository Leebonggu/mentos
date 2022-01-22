// Weight
type Bold = 700;
type WeightMedium = 400;

// fontSize
type XXLarge = '28px';
type XLarge = '24px';
type Large = '20px';
type fontMedium = '18px';
type Small = '15px';
type XSmall = '13px';
type XXSmall = '11px';

// lineHeight
type HeightXXL = '38px';
type HeightXL = '34px';
type HeightL = '26px';
type HeightMedium = '24px';
type HeightSM = '21px';
type HeightXS = '18px';
type HeightXXS = '14px';


export interface Weight {
  bold: Bold;
  medium: WeightMedium;
}

export interface Size {
  xxl: XXLarge;
  xl: XLarge;
  lg: Large;
  md: fontMedium;
  sm: Small;
  xs: XSmall;
  xxs: XXSmall;
}

export interface LineHeight {
  xxl: HeightXXL;
  xl: HeightXL;
  lg: HeightL;
  md: HeightMedium;
  sm: HeightSM;
  xs: HeightXS;
  xxs: HeightXXS;
}

export interface Typography {
  weight: Weight;
  size: Size;
  lineHight: LineHeight;
}