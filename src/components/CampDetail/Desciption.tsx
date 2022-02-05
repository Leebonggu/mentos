import { PaddingY } from '@/styles/mixin';
import styled from 'styled-components';
import { ICampDetail } from '@/typings';
import Summary from './Summary';
import ImageContainer from './ImageContainer';
import Section from './Section';


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
}
function Desciption({ campDetail }: Props) {
  console.log(campDetail)
  return (
    <Container>
      <ContentsWrapper>
        <PaddingY height={30}/>
        <Section title='대답없는 VOD 강의에 라이브로 답하다.'>
          <Summary />
          <ImageContainer src={campDetail.images[0]} alt='camp-image' />
        </Section>
        <PaddingY height={30}/>
        <Section title='트레이닝이 끝난 당신은 이렇게 됩니다.'>
          <ImageContainer src={campDetail.images[1]} alt='camp-image' mt={24} mb={24}/>
        </Section>
      </ContentsWrapper>
      <PaddingY height={30}/>
    </Container>
  );
}

export default Desciption;
