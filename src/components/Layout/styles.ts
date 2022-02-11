import { marginCenter } from '@/styles/mixin';
import styled from 'styled-components';

export const Container = styled.div`
  ${marginCenter};
  width: 100vw;
  min-height: calc(100vh - 64px - 160px)vh;
`;