import styled from 'styled-components';
import { marginCenter, maxWidth } from '@styles/mixin'

export const Container = styled.div`
  position: relative;
  ${maxWidth}; 
  ${marginCenter};
  margin-top: 48px;
  padding: 0 10px;
`;