import styled from 'styled-components';

const TestComponents = styled.div`
  color: ${props => props.theme.color.primary.primary_01};
  font-size: ${props => props.theme.typography.size.xxl};
`;

function App() {
  return (
    <TestComponents>
      App
    </TestComponents>
  );
}

export default App;
