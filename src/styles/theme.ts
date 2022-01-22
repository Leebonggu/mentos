import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    basic: {
      black: '#000000',
      white: '#ffffff',
    },
    gray: {
      gray_01: '#212121',
      gray_02: '#616161',
      gray_03: '#888888',
      gray_04: '#CCCCCC',
      gray_05: '#EEEEEE',
      gray_06: '#F5F5F5',
    },
    primary: {
      primary_01: '#7471FF',
      primary_02: '#CECBEF',
      primary_03: 'linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%)',
    },
    secondary: {
      secondary_01: '#24DBAF',
      secondary_02: '#CDF3EA',
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

export default theme;
