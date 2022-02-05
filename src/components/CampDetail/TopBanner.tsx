import { BackgroundBar } from '@/pages/CampDetail/styles';
import { maxWidth1140px } from '@/styles/mixin';
import { ICampDetail } from '@/typings';
import styled from 'styled-components';
import SubmitBox from './SubmitBox';
import TimeLimitBox from './TimeLimitBox';

const Container = styled.div`
  width: 100;
  height: 560px;
`;

const Contents = styled.div`
  ${maxWidth1140px};
  display: flex;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  flex: 0 0 66.6%;
  max-width: 66.6%;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImageWrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100%;
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
`;

const AbsoluteBox = styled.div`
  flex: 1;
  margin-top: 70px;
  margin-right: 12px;
  margin-left: 12px;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 75%;
  max-width: 353px;
`;

interface Props {
  bgColor: string;
  campDetail: ICampDetail;
}
function TopBanner({ bgColor, campDetail }: Props) {
  const { headerImage } = campDetail;
  return (
    <Container>
      <BackgroundBar bgColor={bgColor} />  
      <Contents>
        <ImageContainer>
          <ImageWrapper>
            <Image src={headerImage} />
          </ImageWrapper>
        </ImageContainer>
        <Aside>
          <AbsoluteBox>
            <SubmitBox {...campDetail} />
            <TimeLimitBox />
          </AbsoluteBox>
        </Aside>
      </Contents>
    </Container>
  );
}

export default TopBanner;


