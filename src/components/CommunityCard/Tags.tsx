import Tag from '@components/atom/Tag';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

interface TagsProps {
  tags?: string[];
}
function Tags({ tags }: TagsProps) {
  console.log(tags?.slice(1))
  return (
    <Container>
      <Tag bgColor='primary' fontColor='white'>{tags?.[0]}</Tag>
      {tags?.slice(1).map((tag => <Tag key={tag} bgColor='default' fontColor='black'>{tag}</Tag>))}
    </Container>
  );
}

export default Tags;
