/* eslint-disable react/display-name */
import styled, { css } from 'styled-components';

interface Props {
  isSticky?: boolean;
  isHome?: boolean;
}

const Logo = styled.span<Props>`
  font-size: ${props => props.theme.typography.size.md};
  font-weight: ${props => props.theme.typography.weight.bold};
  ${props => props.isHome ? css<Props>`
    color: ${props => props.isSticky ? props.theme.color.primary_01 : props.theme.color.white};
  ` : css`
    color: ${props => props.theme.color.primary_01}
  `}
`;

export default function({ isSticky, isHome }:Props) {
  return <Logo isSticky={isSticky} isHome={isHome}>Mentos</Logo>
}