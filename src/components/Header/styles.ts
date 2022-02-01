import styled, { css }from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin';

interface Props {
  isSticky: boolean;
  isHome: boolean;
}

export const Container = styled.header<Props>`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 10;
  background: ${props => props.isHome ? 'transparent' : props.theme.color.white};
  ${props => (props.isHome && props.isSticky)&& css`
    top: 0;
    right: 0;
    left: 0;
    position: sticky;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
    transition: all ease-in-out 0.5s;
  `}
`;

export const ContentsWrapper = styled.nav`
  height: 100%;
  padding: 0 10px;
`;

export const Contents = styled.div`
  ${maxWidth};
  ${marginCenter};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
