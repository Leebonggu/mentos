import React from 'react';
import styled from 'styled-components';

const ImageContaier = styled.div`
  width: 100%;
  height: 100%;
  img {
    max-width: 100%
  }
`;


interface Props {
  src: string;
  alt: string;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}
function ImageContainer({ src, alt, ...props }: Props) {
  return (
    <ImageContaier {...props}>
      <img src={src} alt={alt} />
    </ImageContaier>
  );
}

export default ImageContainer;
