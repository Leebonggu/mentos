import styled, { keyframes } from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin';
import { MOBILE_BREAKPOINT } from '@/constants';

const Slide = keyframes`
    from{
      left: -100%;
    }
    to{
      left: 0%;
    }
`;

// Swiper
export const SwiperContainer = styled.div`
  height: 540px;
  padding-top: 104px;
  padding-bottom: 56px;
  background: ${props => props.theme.color.primary_03};
  display: block;
  z-index: -1;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const SwiperContents = styled.div`
  height: 100%;
  ${maxWidth};
  ${marginCenter};
  display: flex;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

export const TypingContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  color: ${props => props.theme.color.white};
`;

export const Title = styled.div`
  line-height: 56.25px;
  font-size: 36px;
  font-weight: ${props => props.theme.typography.weight.bold};
  padding-bottom: 44px;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-bottom: 16px;
  }
`;
export const ArrowButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .devider {
    width: 280px;
    height: 1px;
    background-color: white;
  }

  .icons {
    margin-left: 10px;
    padding-bottom: 4px;
    color: ${props => props.theme.color.white};
    display: flex;
    width: 30px;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  flex: 6;
  position: relative;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: 0rem;
    margin-top: 12px;
    flex: 7;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: -20px;
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div<{selected: boolean}>`
  width: 10px;
  height: 10px;
  transition: all 0.5s linear;
  cursor: pointer;
  background-color: ${props => props.selected 
    ? props.theme.color.white 
    : props.theme.color.gray_04
  };
  border-radius: 50%;
  margin: 0 3px;
`;

export const Image = styled.div<{imgUrl: string, index: number}>`
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 10%;
`;
