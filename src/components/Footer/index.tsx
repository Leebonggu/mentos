import Icon from '@components/atom/Icon';
import Logo from '@components/atom/Logo';
import {
  Container,
  Contents,
  LogoWrppaer,
  CorporateInformationWrppaer,
  SNSWrapper
}
from './styles';

function Footer() {
  return (
    <Container>
      <Contents>
        <LogoWrppaer>
          <Logo isSticky/>
        </LogoWrppaer>
        <CorporateInformationWrppaer>Info</CorporateInformationWrppaer>
        <SNSWrapper>
          <Icon />
          <Icon />
          <Icon />
        </SNSWrapper>
      </Contents>
    </Container>
  );
}

export default Footer;
