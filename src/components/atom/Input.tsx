import styled from 'styled-components';

type Size = 'small' | 'regular' | 'large';
const getInputHeight = (size?: Size) => {
  switch (size) {
    case 'small':
      return '29px'
    case 'regular':
      return '45px';
    case 'large':
      return '56px';
    default:
      return '45px';
  }
}

interface InputStyledProps {
  height?: Size;
}
const Container = styled.input<InputStyledProps>`
  width: 100%;  
  height: ${props => getInputHeight(props.height)};
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  box-sizing: border-box;
  background: #FFFFFF;
  color: #CBD5E0;

  &::placeholder {
    color: #CBD5E0;
  }
`;

interface Props {
  value: string;
  height: Size;
  onChange: () => void;
}
function Input(props: Props) {
  return <Container {...props} />
}

export default Input;
