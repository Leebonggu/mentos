import { MOBILE_BREAKPOINT } from '@/constants';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{display?: string}>`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  display: ${props => props.display && props.display};
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: ${props => props.theme.typography.size.xl};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

interface HomeCardSectionProps {
  children: ReactNode;
  title: string;
  display?: string; 
}

function HomeCardSection({ children, title, display }: HomeCardSectionProps) {
  return (
    <Container display={display}>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </Container>
  );
}

export default HomeCardSection;
