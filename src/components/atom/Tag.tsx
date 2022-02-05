import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactNode } from 'react';

function handleTagBackgroundColor(color: string) {
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
  bgColor: string;
  fontColor: string;
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
  justify-content: center;
  align-items: center;
`;

export interface TagProps {
  children: ReactNode;
  bgColor: string;
  fontColor?: string;
}

function Tag({ children, bgColor, fontColor='black' }: TagProps) {
  return <Container bgColor={bgColor} fontColor={fontColor}>{children}</Container>
}

export default Tag;
