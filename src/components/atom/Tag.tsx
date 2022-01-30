import theme from '@styles/theme';
import { Basic } from '@styles/colorTypes';
import styled from 'styled-components';
import { ReactNode } from 'react';

type bgColor = 'default' | 'primary' | 'secondary';
type fontColor = keyof Basic

function handleTagBackgroundColor(color: bgColor) {
  switch (color) {
    case 'primary':
      return theme.color.primary_01; 
    case 'secondary':
      return theme.color.secondary_01;
    default:
      return theme.color.gray_05;
  }
}

interface TagStyledProps {
  bgColor: bgColor;
  fontColor: fontColor;
}

const Container = styled.div<TagStyledProps>`
  width: 100%;
  height: 22px;
  border-radius: 4px;
  margin-right: 8px;
  padding: 4px;
  background-color: ${props => handleTagBackgroundColor(props.bgColor)};
  color: ${props => props.fontColor === 'white' ? props.theme.color.white : props.theme.color.black};
  font-size: ${props => props.theme.typography.size.xxs};
  font-weight: ${props => props.theme.typography.weight.bold};
  display: flex;
  align-items: center;
`;

interface TagProps {
  children: ReactNode;
  bgColor: bgColor;
  fontColor: fontColor;
}

function Tag({ children, bgColor, fontColor }: TagProps) {
  return <Container bgColor={bgColor} fontColor={fontColor}>{children}</Container>
}

export default Tag;
