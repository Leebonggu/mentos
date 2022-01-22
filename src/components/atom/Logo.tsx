import styled from 'styled-components';

interface Props {
  isSticky?: boolean;
}
const Logo = styled.span<Props>`
  font-size: ${props => props.theme.typography.size.md};
  font-weight: ${props => props.theme.typography.weight.bold};
  color: ${props => props.isSticky ? props.theme.color.secondary_01 : props.theme.color.white};
`;

// eslint-disable-next-line react/display-name
export default function({ isSticky }:Props) {
  return <Logo isSticky={isSticky}>Mentos</Logo>
}