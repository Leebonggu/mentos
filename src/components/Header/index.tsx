import { Container, ContentsWrapper, Contents } from './styles';
import { useSticky } from '@/hooks/useSticky';
import Swiper from './Swiper';

function Header() {
  const isSticky = useSticky(20);

  return (
    <Container>
      <ContentsWrapper isSticky={isSticky}>
        <Contents>
          <div>MENTOS</div>
          <div>ICON</div>
        </Contents>
      </ContentsWrapper>
      <Swiper />
    </Container>
  );
}

export default Header;

