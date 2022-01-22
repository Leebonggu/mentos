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
  console.log(comments)
  return (
    <Container>
      {comments.map((comment) => <Comment key={comment.id} author={comment.author} text={comment.text} />)}
    </Container>
  );
}

export default CommunityCardComments;
