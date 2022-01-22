import { Color } from '@styles/colorTypes';
import theme from '@styles/theme';

type ColorParmas = keyof Color
export const conditionalColorGenerator = (colorType: ColorParmas) => {
  switch (colorType) {
    case 'black':
      return theme.color.black; 
    case 'white':
      return theme.color.white;
    case 'gray_01':
      return theme.color.gray_01;
    case 'gray_02':
      return theme.color.gray_02;
    case 'gray_03':
      return theme.color.gray_03;
    case 'gray_04':
      return theme.color.gray_04;
    case 'gray_05':
      return theme.color.gray_05;
    case 'gray_06':
      return theme.color.gray_06;
    case 'primary_01':
      return theme.color.primary_01;
    case 'primary_02':
      return theme.color.primary_02;
    case 'primary_03':
      return theme.color.primary_03;
    case 'secondary_01':
      return theme.color.secondary_01;
    case 'secondary_02':
      return theme.color.secondary_02;
    default:
      return theme.color.black; 
  }
}

