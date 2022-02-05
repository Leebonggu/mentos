import React from 'react';
import styled from 'styled-components';

interface StyleProps {
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const ImageContaier = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  img {
    max-width: 100%
  }
  margin-top: ${props => props.mt}px;
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  padding-top: ${props => props.pt}px;
  padding-bottom: ${props => props.pb}px;
  padding-right: ${props => props.pr}px;
  padding-left: ${props => props.pl}px;
`;


interface Props extends StyleProps {
  src: string;
  alt: string;
}
function ImageContainer({ src, alt, ...props }: Props) {
  return (
    <ImageContaier {...props}>
      <img src={src} alt={alt} />
    </ImageContaier>
  );
}

export default ImageContainer;
