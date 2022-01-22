import styled from 'styled-components';

// index
export const CommunityContainer = styled.div`
  width: 224px;
  height: 320px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.gray_04};
  background-color: ${props => props.theme.color.white};
  box-sizing: border-box;
  position: relative;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// Comments

// Article