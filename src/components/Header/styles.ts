import styled, { css }from 'styled-components';

export const Container = styled.header<ContentsWrapperProps>`
  height: 64px;
  background: ${props => props.theme.color.primary.primary_03};
  ${props => props.isSticky && css`
    color: ${props => props.theme.color.basic.white};
    top: 0;
    position: sticky;
    background: ${props => props.theme.color.basic.white};
    color: ${props => props.theme.color.basic.black};
    transition: all ease-in 0.2s;
  `}
`;

interface ContentsWrapperProps {
  isSticky: boolean;
}
export const ContentsWrapper = styled.nav`
  height: 100%;
`;

export const Contents = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
