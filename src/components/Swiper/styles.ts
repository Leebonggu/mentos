import styled from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin';

// Swiper
export const SwiperContainer = styled.div`
  height: 540px;
  padding-top: 64px;
  background: ${props => props.theme.color.primary_03};
  display: block;
  z-index: -1;
`;

export const SwiperContents = styled.div`
  ${maxWidth};
  ${marginCenter};
`;