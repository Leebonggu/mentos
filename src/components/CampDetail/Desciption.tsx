import styled from 'styled-components';
import { ICampDetail } from '@/typings';
import { PaddingY } from '@/styles/mixin';
import Summary from './Summary';
import ImageContainer from './ImageContainer';
import Section from './Section';
import Review from './Review';


const Container = styled.div`
  width: 100;
  padding-top: 52px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;


interface Props {
  campDetail: ICampDetail;
  bgColor: string;
}
function Desciption({ campDetail, bgColor }: Props) {
  console.log(campDetail)
  return (
    <Container>
      <ContentsWrapper>
        <PaddingY height={30}/>
        {/* section 1 */}
        <Section title='대답없는 VOD 강의에 라이브로 답하다.'>
          <Summary />
          <ImageContainer src={campDetail.images[0]} alt='camp-image' />
        </Section>
        <PaddingY height={30}/>
        {/* section 2 */}
        <Section title='트레이닝이 끝난 당신은 이렇게 됩니다.'>
          <ImageContainer src={campDetail.images[1]} alt='camp-image' mt={24} mb={24} />
        </Section>
        {/* section 3 */}
        <Section
          mt={24}
          mb={24}
          title='먼저 트레이닝 받은 분들의 <br/> 이야기를 들어보세요.'
          bgColor={bgColor}
        >
          <Review reviews={campDetail.reviews}/>
        </Section>
        {/* section 4 */}
        <Section title='이런 분들이라면 꼭 들으세요!' mt={24} mb={24}>
         <ImageContainer src='https://cdn.comento.kr/images/pt/tmp/prefix_djPZPRMyao.png' alt='camp-image'  mt={24} mb={24} />
        </Section>
        {/* section 5 */}
        <Section title='주니어 개발자에게<br/>꼭 필요한 내용만 담았습니다.' mt={24} mb={24}>
          <ImageContainer src={campDetail.images[2]} alt='camp-image'  mt={24} mb={24} />
        </Section>
      </ContentsWrapper>
      <PaddingY height={30}/>
    </Container>
  );
}

export default Desciption;
