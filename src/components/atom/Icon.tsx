import styled from 'styled-components';
import { IconProps } from '@/typings';
// import { conditionalColorGenerator } from '@libs/colorHelper'

 const Container = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  margin-top: ${props => props.mt}px;
  margin-bottom: ${props => props.mb}px;
`;

function Icon({ children, bgColor, ...props }: IconProps) {
  return <Container bgColor={bgColor} {...props}>{children}</Container>
}

export default Icon;

