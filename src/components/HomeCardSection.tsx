import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: ${props => props.theme.typography.size.xl};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

interface HomeCardSectionProps {
  children: ReactNode;
  title: string;
}

function HomeCardSection({ children, title }: HomeCardSectionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </Container>
  );
}

export default HomeCardSection;
