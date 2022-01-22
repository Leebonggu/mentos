import Tag from '@components/atom/Tag';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

interface TagsProps {
  tags: string[];
}
function Tags({ tags }: TagsProps) {
  return (
    <Container>
      <Tag bgColor='primary' fontColor='white'>{tags[0]}</Tag>
      <Tag bgColor='default' fontColor='black'>{tags[1]}</Tag>
    </Container>
  );
}

export default Tags;
