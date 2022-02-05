import { BackgroundBar } from '@/pages/CampDetail/styles';
import { maxWidth1140px } from '@/styles/mixin';
import styled from 'styled-components';

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
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 80%;
  max-width: 353px;
`;

const SubmitBox = styled.div`
  flex: 4;
  background-color: wheat;
  border-radius: 6px;
  
`;

const TimeBox = styled.div`
  margin-top: 20px;
  flex: 1;
`;

interface Props {
  bgColor: string;
}
function TopBanner({ bgColor }: Props) {
  return (
    <Container>
      <BackgroundBar bgColor={bgColor} />  
      <Contents>
        <ImageContainer>
          <ImageWrapper>
            <Image src="https://raw.githubusercontent.com/congchu/caffein-server/master/assets/images/camp_header.png"/>
          </ImageWrapper>
        </ImageContainer>
        <Aside>
          <AbsoluteBox>
            <SubmitBox>
              <div>
              ddd
              ddd
              ddd
              ddd
              ddd
              dddddddddddddddddddddddd
              ddd
              ddd
              ddd
              ddd
              ddd
              ddd
              ddd
              ddd
              </div>
            </SubmitBox>
            <TimeBox>Time</TimeBox>
          </AbsoluteBox>
        </Aside>
      </Contents>
    </Container>
  );
}

export default TopBanner;


