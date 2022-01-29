import { SVGProps } from 'react'

export const ArrowDownIcon = ({ width, height }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width || 16} height={height || 9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1L8 8L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}