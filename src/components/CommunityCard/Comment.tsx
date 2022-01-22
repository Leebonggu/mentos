import Icon from '@components/atom/Icon';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const Contents = styled.div`
  width: 150px;
  margin-left: 8px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Nickname = styled.div`
  margin-bottom: 4px;
  font-size: ${props => props.theme.typography.size.xs};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

const Text = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${props => props.theme.typography.size.xs};
  font-weight: ${props => props.theme.typography.weight.medium};
`;

interface CommentProps {
  nickname: string;
  text: string;
}
function Comment({ nickname, text }: CommentProps) {
  return (
    <Container>
      <Icon />
      <Contents>
        <Nickname>{nickname}</Nickname>
        <Text>{text}</Text>
      </Contents>
    </Container>
  );
}

export default Comment;
