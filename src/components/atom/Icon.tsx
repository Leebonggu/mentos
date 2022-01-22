import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.color.gray_05};
`;


interface IconProps {
  children?: ReactNode;
}
function Icon({ children }: IconProps) {
  return <Container>{children}</Container>
}

export default Icon;

