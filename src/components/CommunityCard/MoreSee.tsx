import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.size.xxs};
  color: ${props => props.theme.color.secondary_01};
`;

function MoreSee() {
  return <Container>+더보기</Container>;
}

export default MoreSee;
