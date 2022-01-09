import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    basic: {
      black: '#000000',
      white: '#ffffff',
    },
    gray: {
      gray_01: '#212121',
      gray_02: '#616161',
      gray_03: '#888888',
      gray_04: '#cccccc',
      gray_05: '#eeeeee',
      gray_06: '#f5f5f5',
    },
    primary: {
      primary_01: '#7471ff',
      primary_02: '#cecbef',
      primary_03: '#8148fb',
    },
    secondary: {
      secondary_01: '#24dbaf',
      secondary_02: '#cdf3ea',
    }
  },
  typography: {
    weight: {
      bold: 700,
      medium: 400,
    },
    size: {
      xxl: '28px',
      xl: '24px',
      lg: '20px',
      md: '18px',
      sm: '15px',
      xs: '13px',
      xxs: '11px',
    },
    lineHight: {
      xxl: '38px',
      xl: '34px',
      lg: '26px',
      md: '24px',
      sm: '21px',
      xs: '18px',
      xxs: '14px',
    },
  }
};
