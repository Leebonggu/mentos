import { SVGProps } from 'react'

export const ArrowRightIcon = ({ width, height, color = '#000000' }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width || 9} height={height || 16} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L8 8L1 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}