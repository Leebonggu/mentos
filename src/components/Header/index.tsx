import { Container, ContentsWrapper, Contents } from './styles';
import { useSticky } from '@hooks/useSticky'
import Logo from '@components/atom/Logo';

function Header() {
  const isSticky = useSticky(20);

  return (
    <Container isSticky={isSticky}>
      <ContentsWrapper>
        <Contents>
          <Logo isSticky={isSticky}/>
          <div>ICON</div>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default Header;

