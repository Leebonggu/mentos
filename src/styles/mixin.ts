import styled, { css } from 'styled-components';

export const maxWidth = css`
  max-width: 960px;
  `;

export const marginCenter = css`
  margin: 0 auto;
`;

export const PaddingY = styled.div<{height: number}>`
  padding: ${props => props.height} 0;
`;
