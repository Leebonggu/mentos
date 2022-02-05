import { maxWidth1140px, PaddingY } from '@/styles/mixin';
import styled from 'styled-components';
import { ICampDetail } from '@/typings';
import Summary from './Summary';
import ImageContainer from './ImageContainer';


const Container = styled.div`
  width: 100;
  padding-top: 52px;
`;

const ContentsWrapper = styled.div`
  ${maxWidth1140px};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Contents = styled.div`
  padding: 0 12px;
  flex: 0 0 66.6%;
  max-width: 66.6%;
`;

interface Props {
  campDetail: ICampDetail;
}
function Desciption({ campDetail }: Props) {
  console.log(campDetail)
  return (
    <Container>
      <ContentsWrapper>
        <Contents>
          <Summary />
          <PaddingY height={30}/>
          <ImageContainer src={campDetail.images[0]} alt='camp-image' />
          <PaddingY height={30}/>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default Desciption;
