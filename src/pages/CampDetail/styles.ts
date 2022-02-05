import styled from 'styled-components';
import { marginCenter, maxWidth } from '@/styles/mixin';

export const Container = styled.div`
  ${marginCenter}
  width: 100%;
  padding-top: 64px;
  position: relative;
`;

export const BackgroundBar = styled.div<{bgColor: string}>`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: ${props => props.bgColor};
`;