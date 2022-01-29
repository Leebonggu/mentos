import { SVGProps } from 'react'

export const ArrowDownIcon = ({ width, height, color = '#000000', onClick }: SVGProps<SVGSVGElement>) => {
  return (
    <svg onClick={onClick} width={width || 16} height={height || 9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1L8 8L1 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}