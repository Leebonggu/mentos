import { Container, ContentsWrapper, Contents } from './styles';
import { useSticky } from '@hooks/useSticky';
import { UserIcon } from '@assets/svg/UserIcon';
import { theme }from '@styles/theme'
import Logo from '@components/atom/Logo';

function Header() {
  const isSticky = useSticky(50);

  return (
    <Container isSticky={isSticky}>
      <ContentsWrapper>
        <Contents>
          <Logo isSticky={isSticky}/>
          <UserIcon color={isSticky ? `${theme.color.black}`: `${theme.color.white}`}/>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default Header;

