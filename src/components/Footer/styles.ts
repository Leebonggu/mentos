import { marginCenter, maxWidth } from '@/styles/mixin';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  background-color: ${props => props.theme.color.gray_05};
`;

export const Contents = styled.div`
  ${marginCenter};
  ${maxWidth}
  padding: 32px 0 36px 0;
  display: flex;
`;

export const LogoWrppaer = styled.div`
  flex: 2;
`
export const CorporateInformationWrppaer = styled.div`
  height: 56px;
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.theme.typography.size.xs};
`;

export const Address = styled.div``;
export const CorporateInformationBottom = styled.div`
  line-height: ${props => props.theme.typography.lineHight.xxs};
`;
export const Copyright = styled.div``;
export const Policy = styled.div`
  span {
    margin-right: 5px;
  }
`;

export const SNSWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;


// Mobile
export const MobildContents = styled.div`
  padding: 21px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MobileContentsTop = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
`;
export const MobileContentsBottom = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* padding-top: 23px; */
  font-size: ${props => props.theme.typography.size.xs};
`;