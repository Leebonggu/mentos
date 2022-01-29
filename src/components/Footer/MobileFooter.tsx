import { SocialFacebookIcon } from '@/assets/svg/SocialFacebookIcon';
import { SocialGithubIcon } from '@/assets/svg/SocialGithubIcon';
import { SocialTwitterIcon } from '@/assets/svg/SocialTwitterIcon';
import Logo from '@/components/atom/Logo';
import {
  Container,
  MobildContents,
  MobileContentsTop,
  SocialIconWrapper,
  MobileContentsBottom,
  CorporateInformationBottom,
  Address,
  Copyright,
  Policy
} from './styles';

function MobileFooter() {
  return (
    <Container>
      <MobildContents>
        <MobileContentsTop>
          <Logo isSticky />
          <SocialIconWrapper>
            <SocialFacebookIcon />
            <SocialGithubIcon ml={5} />
            <SocialTwitterIcon ml={5} />
          </SocialIconWrapper>
        </MobileContentsTop>
        <MobileContentsBottom>
          <Address>대표: Lee. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</Address>
          <CorporateInformationBottom>
            <Copyright>Copyright by (주)Mentos. All right reserved.</Copyright>
            <Policy >
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </Policy>
          </CorporateInformationBottom>
        </MobileContentsBottom>
      </MobildContents>
    </Container>
  );
}

export default MobileFooter;
