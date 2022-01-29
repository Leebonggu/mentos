import { SVGProps } from 'react';
import styled from 'styled-components';
import { Color } from '@styles/colorTypes';
import { conditionalColorGenerator } from '@libs/colorHelper'

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

type TwitterColor = '#63B3ED';
type GoogleColor = '#E53E3E';
type InstagramColor = '#2D3748';
type FacebookColor = '#3182CE';

interface IconProps {
  children?: SVGProps<SVGSVGElement>;
  bgColor: keyof Color | TwitterColor | GoogleColor | InstagramColor | FacebookColor;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}
function Icon({ children, bgColor, ...props }: IconProps) {
  return <Container bgColor={bgColor} {...props}>{children}</Container>
}

export default Icon;

