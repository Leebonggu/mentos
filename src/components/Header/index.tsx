import { Container, ContentsWrapper, Contents } from './styles';
import { useSticky } from '@hooks/useSticky'

function Header() {
  const isSticky = useSticky(20);

  return (
    <Container isSticky={isSticky}>
      <ContentsWrapper>
        <Contents>
          <div>MENTOS</div>
          <div>ICON</div>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default Header;

