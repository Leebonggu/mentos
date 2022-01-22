import { ReactNode } from 'react';
import { Container } from './styles';

interface LayoutProps {
  children: ReactNode,
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout;
