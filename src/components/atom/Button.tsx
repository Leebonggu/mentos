import styled, { css } from 'styled-components';

const Container = styled.button<Props>`
  width: 100%;
  height: 48px;
  background-color: ${props => props.theme.color.primary_01};
  color: ${props => props.theme.color.white};
  outline: none;
  border: none;
  border-radius: 6px;
  font-weight: ${props => props.weight || 'bold'};
  cursor: pointer;
  ${props => props.pl && css`padding-left: ${props.pl}px;`};
  ${props => props.pt && css`padding-top: ${props.pt}px;`};
  ${props => props.pr && css`padding-right: ${props.pr}px;`};
  ${props => props.pb && css`padding-bottom: ${props.pb}px;`};

  &:disabled {
    opacity: 0.2;
  }

  &:hover {
    opacity: 0.8;
  }
`
interface Props {
  disabled?: boolean;
  children: React.ReactNode;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  weight?: 'bold' | 'normal'
}
function Button({ disabled, children, ...props }: Props) {
  return <Container disabled={disabled} {...props}>{children}</Container>
}

export default Button;
