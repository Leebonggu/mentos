import { ReactNode } from 'react';
import styled from 'styled-components';
import font from '@/styles/font';
import { maxWidth1140px } from '@/styles/mixin';


const Container = styled.div<{bgColor?: string}>`
  width: 100%;
  background-color: ${props => props.bgColor};
`;
const Wrapper = styled.div`
  ${maxWidth1140px};
  margin: 0 auto;;
`;
const Contents = styled.div`
  padding: 0 12px;
  flex: 0 0 66.6%;
  max-width: 66.6%;
`;

const Title = styled.h5`
  ${font.H2}
  font-weight: 900;
  flex: 1;
`;

interface Props {
  children: ReactNode;
  bgColor?: string; 
  title?: string;
}
function Section({ children, bgColor, title }: Props) {
  return (
    <Container bgColor={bgColor}>
      <Wrapper>
        <Contents>
          {title && <Title>{title}</Title>}
          {children}
        </Contents>
      </Wrapper>
    </Container>
  );
}

export default Section;
