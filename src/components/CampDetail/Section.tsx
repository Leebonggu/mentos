import { ReactNode } from 'react';
import styled from 'styled-components';
import font from '@/styles/font';
import { maxWidth1140px } from '@/styles/mixin';
import { MOBILE_BREAKPOINT } from '@/constants';

interface StyleProps {
  bgColor?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const Container = styled.div<StyleProps>`
  width: 100%;
  background-color: ${props => props.bgColor};
`;

const Wrapper = styled.div`
  margin-top: 50px;
  ${maxWidth1140px};
  margin: 0 auto;
`;

const Contents = styled.div<StyleProps>`
  padding: 0 12px;
  flex: 0 0 66.6%;
  max-width: 66.6%;
  margin-top: ${props => props.mt}px;
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex: 0 0 100%;
    max-width: 100%; 
  }
`;

const Title = styled.div`
  ${font.H2}
  font-weight: 900;
  flex: 1;
`;

interface Props {
  children: ReactNode;
  bgColor?: string; 
  title?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}
function Section({ children, bgColor, title, ...props }: Props) {
  return (
    <Container bgColor={bgColor}>
      <Wrapper>
        <Contents  {...props}>
          {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
          {children}
        </Contents>
      </Wrapper>
    </Container>
  );
}

export default Section;
