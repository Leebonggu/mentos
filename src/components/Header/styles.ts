import styled, { css }from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin';

export const Container = styled.header<ContentsWrapperProps>`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 10;
  background: transparent;
  ${props => props.isSticky && css`
    color: ${props => props.theme.color.white};
    top: 0;
    position: sticky;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
    transition: all ease-in-out 0.5s;
  `}
`;

interface ContentsWrapperProps {
  isSticky: boolean;
}
export const ContentsWrapper = styled.nav`
  height: 100%;
`;

export const Contents = styled.div`
  ${maxWidth};
  ${marginCenter};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
