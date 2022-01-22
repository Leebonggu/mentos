import styled from 'styled-components';

// Swiper
export const SwiperContainer = styled.div`
  height: calc(540px - 64px);
  background: ${props => props.theme.color.primary_03};
  display: block;
  z-index: -1;
`;

export const SwiperContents = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;