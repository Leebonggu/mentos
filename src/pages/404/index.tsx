import styled from 'styled-components';

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NotFound() {
  return <Container>404 Not Found</Container>;
}

export default NotFound;
