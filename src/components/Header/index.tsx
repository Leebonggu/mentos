import { Container, ContentsWrapper, Contents } from './styles';
import { useSticky } from '@hooks/useSticky';
import { UserIcon } from '@assets/svg/UserIcon';
import { theme }from '@styles/theme'
import Logo from '@components/atom/Logo';
import { useIsLocationHome } from '@/hooks/useIsLocationHome';

function Header() {
  const isSticky = useSticky(50);
  const isHome = useIsLocationHome();

  return (
    <Container isSticky={isSticky} isHome={isHome}>
      <ContentsWrapper>
        <Contents>
          <Logo isSticky={isSticky} isHome={isHome}/>
          <UserIcon color={(isSticky || !isHome) ? `${theme.color.black}`: `${theme.color.white}`}/>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default Header;

