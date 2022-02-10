import  BackgroundBar from './BackgroundColorBar'
import { maxWidth1140px } from '@/styles/mixin';
import { ICampDetail } from '@/typings';
import styled from 'styled-components';
import SubmitBox from './SubmitBox';
import TimeLimitBox from './TimeLimitBox';
import { MOBILE_BREAKPOINT } from '@/constants';
import { useMobileMode } from '@/hooks/useMobileWidth';
import BottomSitckyButton from './BottomSitckyButton';

const Container = styled.div`
  width: 100;
  /* height: 560px; */
`;

const Contents = styled.div`
  ${maxWidth1140px};
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 66.6%;
  max-width: 66.6%;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    /* flex: 1; */
    padding: 0px;
    width: 100%;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: 0;
  }
`;

const Image = styled.img`
  border-radius: 6px;
  max-width: 100%
`;

const Aside = styled.div`
  display: flex;
  flex: 0 0 33.3%;
  max-width: 33.3%;
  position: relative;
  display: flex;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex: 0;
    max-width: 0%;
    display: none;
  }
`;

const AbsoluteBox = styled.div`
  flex: 1;
  margin-top: 70px;
  margin-right: 12px;
  margin-left: 12px;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 70%;
  max-width: 353px;
`;

interface Props {
  campId?: string;
  bgColor: string;
  campDetail: ICampDetail;
  isMobile?: boolean;
}
// TODO: 개선 필요
const Comp = ({ bgColor, campDetail, isMobile, campId }: Props) => (
  <>
    {!isMobile && <BackgroundBar bgColor={bgColor} />}
    <Contents>
      <ImageContainer>
        <ImageWrapper>
          <Image src={campDetail.headerImage} />
        </ImageWrapper>
      </ImageContainer>
      {isMobile && (
        <>
          <SubmitBox {...campDetail}/>
          <BottomSitckyButton campId={campId}/>
        </>
      )}
      {!isMobile && 
        <Aside>
          <AbsoluteBox>
            <SubmitBox {...campDetail} id={campId}/>
            <TimeLimitBox />
          </AbsoluteBox>
        </Aside>
      }
    </Contents>
  </>
)

function TopBanner({ bgColor, campDetail, campId }: Props) {
  console.log(campDetail)
  const isMobile = useMobileMode();
  return (
    <Container>
      <Comp campDetail={campDetail} bgColor={bgColor} isMobile={isMobile} campId={campId} />
    </Container>
  );
}

export default TopBanner;


