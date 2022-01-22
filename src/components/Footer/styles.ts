import styled from 'styled-components';

export const Container = styled.footer`
  height: 160px;
  background-color: ${props => props.theme.color.gray_05};
`;

export const Contents = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 32px 0 72px 0;
  display: flex;
`;

export const LogoWrppaer = styled.div`
  flex: 2;
`
export const CorporateInformationWrppaer = styled.div`
  flex: 6;
`;
export const SNSWrapper = styled.div`
  flex: 2;
`;