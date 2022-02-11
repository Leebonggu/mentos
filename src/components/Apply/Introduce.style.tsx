import styled from 'styled-components';

export const Container = styled.div`
  max-width: 722px;
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  /* padding: 36px; */
`;

export const Description = styled.div`
  flex: 0 0 85%;
  height: 160px;
  padding: 32px;
  border-radius: 12px;
  background-color: ${props => props.theme.color.white};
  position: relative;
  line-height: 24px;

  h3 {
    font-weight: ${props => props.theme.typography.weight.bold};
  }

  .triangle {
    position: absolute;
    right: -1rem;
    top: 60px;
    width: 0;
    height: 0;
    border-top: 12.5px solid transparent;
    border-left: 25px solid white;
    border-bottom: 12.5px solid transparent;
  }
`;

export const IconWrapepr = styled.div`
  flex: 0 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mento-name {
    font-size: 10px;
    margin-top: 1rem;
  }
`;