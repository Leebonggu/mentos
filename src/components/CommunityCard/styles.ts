import styled from 'styled-components';
import { Link } from 'react-router-dom';

// index
export const CommunityContainer = styled.div`
  width: 100%;
  height: 320px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.gray_04};
  background-color: ${props => props.theme.color.white};
  /* box-sizing: border-box; */
  position: relative;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
`;

export const Contents = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// Comment
export const CommentContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CommentContents = styled.div`
  flex: 1;
  margin-left: 8px;

`;

export const AuthorName = styled.div`
  margin-bottom: 4px;
  font-size: ${props => props.theme.typography.size.xs};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

export const Text = styled.div`
  /* width: 135px; */
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: ${props => props.theme.typography.size.xs};
  font-weight: ${props => props.theme.typography.weight.medium};
`;

// MoreSee
export const MoreSeeContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: ${props => props.theme.typography.size.xxs};
  color: ${props => props.theme.color.primary_01};
`;



