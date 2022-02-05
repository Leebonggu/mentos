import { SocialFacebookIcon } from '@/icons/SocialFacebookIcon';
import { SocialGithubIcon } from '@/icons/SocialGithubIcon';
import { SocialTwitterIcon } from '@/icons/SocialTwitterIcon';
import Logo from '@components/atom/Logo';
import {
  Container,
  Contents,
  LogoWrppaer,
  CorporateInformationWrppaer,
  SNSWrapper,
  Address,
  CorporateInformationBottom,
  Copyright,
  Policy,
}
from './styles';


function Footer() {
  return (
    <Container>
      <Contents>
        <LogoWrppaer>
          <Logo isSticky/>
        </LogoWrppaer>
        <CorporateInformationWrppaer>
          <Address>대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</Address>
          <CorporateInformationBottom>
            <Copyright>Copyright by (주)Mentos. All right reserved.</Copyright>
            <Policy>
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </Policy>
          </CorporateInformationBottom>
        </CorporateInformationWrppaer>
        <SNSWrapper>
          <SocialFacebookIcon />
          <SocialGithubIcon ml={5} />
          <SocialTwitterIcon ml={5} />
        </SNSWrapper>
      </Contents>
    </Container>
  );
}

export default Footer;
