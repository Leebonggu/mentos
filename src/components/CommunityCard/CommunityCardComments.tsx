import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface CommunityCardCommentsProps {
  nickname: string;
  text: string;
}
function CommunityCardComments({ nickname, text }: CommunityCardCommentsProps) {
  return (
    <Container>
      <Comment nickname={nickname} text={text} />
    </Container>
  );
}

export default CommunityCardComments;
