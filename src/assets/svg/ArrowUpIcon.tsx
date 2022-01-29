import { SVGProps } from 'react'

export const ArrowUpIcon = ({ width, height, color = '#000000' }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width || 16} height={height || 9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8L8 1L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}