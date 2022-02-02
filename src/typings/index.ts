import { Colors } from '@/styles/colorTypes';
import { SVGProps } from 'react';

export type ClassStatus = '모집전' | '모집중' | '모집완료';
export type CampType = 'popular' | 'sale';
export interface Camp {
  id: number;
  name: string;
  type?: CampType;
  status: ClassStatus;
  field?: string;
  skill?: string;
  thumbnail?: string;
  startDate: string;
}

// Community
export interface IComment {
  id: number;
  author: string;
  text: string;
}

export interface ICommunity {
  id: number;
  title: string;
  text: string;
  author?: string;
  tags: string[];
  // id만 가지고 있어도 될텐데..?
  comments: IComment[];
}


type TwitterColor = '#63B3ED';
type GoogleColor = '#E53E3E';
type InstagramColor = '#2D3748';
type FacebookColor = '#3182CE';

export interface IconProps {
  children?: SVGProps<SVGSVGElement>;
  bgColor?: Colors | TwitterColor | GoogleColor | InstagramColor | FacebookColor;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}