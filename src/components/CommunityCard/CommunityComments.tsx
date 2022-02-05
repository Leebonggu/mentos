import { IComment } from '@/typings';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface CommunityCardCommentsProps {
  comments: IComment[];
}
function CommunityCardComments({ comments }: CommunityCardCommentsProps) {
  return (
    <Container>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.nickname} text={comment.content} profile={comment.profile} />
      ))}
    </Container>
  );
}

export default CommunityCardComments;
