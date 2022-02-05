import styled from 'styled-components';

export const Container = styled.div<{bgColor: string}>`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: ${props => props.bgColor};
`;

interface Props {
  bgColor: string;
}
function BackgroundBar({ bgColor }: Props) {
  return <Container bgColor={bgColor}/>
}

export default BackgroundBar;
