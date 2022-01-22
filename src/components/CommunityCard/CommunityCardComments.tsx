import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function CommunityCardComments() {
  return (
    <>
      <Container>
        <Comment nickname='man' text='coding' />
        <Comment nickname='man' text='coding' />
      </Container>
    </>
  );
}

export default CommunityCardComments;
