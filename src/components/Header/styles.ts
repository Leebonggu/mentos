import styled, { css }from 'styled-components';

export const Container = styled.header`
  height: 540px;
  background: ${props => props.theme.color.primary.primary_01};
`;

interface ContentsWrapperProps {
  isSticky: boolean;
}
export const ContentsWrapper = styled.nav<ContentsWrapperProps>`
  height: 64px;
  color: ${props => props.theme.color.basic.white};
  ${props => props.isSticky && css`
    top: 0;  
    position: sticky;
    background: ${props => props.theme.color.basic.white};
    color: ${props => props.theme.color.basic.black};
    transition: all ease-in 0.2s;
  `}
`;

export const Contents = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


// Swiper
export const SwiperContainer = styled.div`
  height: calc(540px - 64px);
  background: ${props => props.theme.color.primary.primary_01};
`;

export const SwiperContents = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;