import React from 'react'
import styled from 'styled-components'

interface StyleProps {
  isValid: boolean;
  visible: boolean;
}
const Container = styled.div<StyleProps>`
  color: ${props => props.isValid ? 'skyblue': 'red' };
  font-size: ${props => props.theme.typography.size.xxs};
  display: ${props => props.visible ? 'visible' : 'none'};
`;

interface Props {
  isValid: boolean;
  text: string;
  visible: boolean;
}
function Message({
  text,
  isValid,
  visible,
}: Props) {
  return (
    <Container isValid={isValid} visible={visible}>{text}</Container>
  )
}

export default Message