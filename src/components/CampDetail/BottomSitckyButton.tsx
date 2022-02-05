import React from 'react';
import styled from 'styled-components';
import Button from '../atom/Button';
import TimeLimitBox from './TimeLimitBox';

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.white};
  position: relative;

`;

const Contents = styled.div`
  background-color: ${props => props.theme.color.white};
  width: 100%;
  position: fixed;
  padding: 24px 0;
  bottom: 0;
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */

`;

function BottomSitckyButton() {
  return (
    <Container>
      <Contents>
        <TimeLimitBox />
        <Button disabled={false}>등록하기</Button>
      </Contents>
    </Container>
  );
}

export default BottomSitckyButton;
