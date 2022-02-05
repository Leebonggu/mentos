import { MOBILE_BREAKPOINT } from '@/constants';
import { ReactNode } from 'react';
import styled from 'styled-components';
import CardSectionSkeleton from './Skeleton/CardSectionSkeleton';

const Container = styled.div<{isMobile?: string}>`
  flex-direction: column;
  margin-bottom: 48px;
  display: ${props => props.isMobile ? 'none' : 'flex'};
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  overflow-x: scroll;

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
  loading: boolean;
  isMobile?: string; 
}

function HomeCardSection({ children, title, isMobile, loading }: HomeCardSectionProps) {
  return (
    <Container isMobile={isMobile}>
      {loading ? (
        <CardSectionSkeleton />
      ) : (
        <>
          <Title>{title}</Title>
          <Contents>{children}</Contents>
        </>
      )}
    </Container>
  );
}

export default HomeCardSection;
