import styled, { css }from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin';

export const Container = styled.header<ContentsWrapperProps>`
  height: 64px;
  z-index: 10;
  background: ${props => props.theme.color.primary_03};
  ${props => props.isSticky && css`
    color: ${props => props.theme.color.white};
    top: 0;
    position: sticky;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
    transition: all ease-in 0.1s;
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
