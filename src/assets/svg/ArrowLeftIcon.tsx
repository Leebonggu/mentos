import { SVGProps } from 'react'

export const ArrowLeftIcon = ({ width, height }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width || 16} height={height || 9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 15L1 8L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}