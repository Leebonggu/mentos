import styled from 'styled-components';

export const Container = styled.form`
  max-width: 722px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
  padding: 36px;
  margin: 2rem;
`;

export const Title = styled.h2`
  margin-bottom: 6px;
  font-weight: ${props => props.theme.typography.weight.bold};
`;

export const InputWrapper = styled.div``;

export const InputRow = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  flex: 0 0 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${props => props.theme.typography.size.xs};
  color: ${props => props.theme.color.gray_03};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

export const InputWithMessage = styled.div`
  flex: 0 0 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const ButtonWrapper = styled.div``;