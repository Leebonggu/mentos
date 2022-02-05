import { MOBILE_BREAKPOINT } from '@/constants';
import font from '@/styles/font';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${font.H2}
  font-weight: 900;
  flex: 1;
`;

const Desc = styled.div`
  flex: 1;
  color: ${props => props.theme.color.gray_02};
  font-weight: 600;
  line-height: 1.4;
`;

const Detail = styled.div`
  flex: 3;
  margin: 12px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DetailBox = styled.div`
  height: 120px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${props => props.theme.color.gray_05};
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: 12px;
  }

  & > .box-title {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.md};
    flex: 1;
  }
  & > .box-desc {
    margin-top: 3px;
    font-size: ${props => props.theme.typography.size.xs};
    font-weight: 500;
    flex: 3;
    line-height: 20px;
    text-align: center;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;


function Summary() {
  return (
    <Container>
      <Title>대답없는 VOD 강의에 라이브로 답하다.</Title>
      <Desc>
        React만큼은 실무에 제대로 활용할 수 있도록,
        <br/>
        오프라인 강의와 온라인 VOD의 장점만 모았습니다.
      </Desc>
      <Detail>
        <DetailBox>
          <div className='box-title'>라이브 즉문즉답</div>
          <div className='box-desc'>최대 18시간 Full 라이브!<br/>실시간으로 묻고 해답을 얻을 수 있습니다.</div>
        </DetailBox>
        <DetailBox>
          <div className='box-title'>라이브 실무 과제</div>
          <div className='box-desc'>실무와 비슷한 환경에서 직접 과제를 수행하고, <br />과제 피드백을 받을 수 있습니다.</div>
        </DetailBox>
        <DetailBox>
          <div className='box-title'>라이브 스터디</div>
          <div className='box-desc'>실시간으로 함께 공부하며 의지를 나누니까<br/>포기 없이 완주할 수 있습니다.</div>
        </DetailBox>
      </Detail>
    </Container>
  );
}

export default Summary;
