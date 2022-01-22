import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  padding: 36px 48px;
  margin: 12px 0 56px 0;
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.primary_03};
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.typography.size.xl};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

function Banner() {
  return <Container>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</Container>;

}

export default Banner;
