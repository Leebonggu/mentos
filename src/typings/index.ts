import { Colors } from '@/styles/colorTypes';
import React, { SVGProps } from 'react';


export type ClassStatus = '모집전' | '모집중' | '모집완료';
export type CampType = 'popular' | 'sale';
export interface Camp {
  id: number;
  name: string;
  type: CampType;
  status: ClassStatus;
  // field?: string;
  skill: string;
  thumbnail?: string;
  startDate: string;
}

interface Faq {
  answer: string;
  question: string;
}

interface Review {
  content: string;
  reviewer: string;
}
export interface ICampDetail {
  desc: string;
  faqs: Faq[];
  headerImage: string;
  images: string[];
  name: string;
  process: string;
  reviewMaterial: string[];
  reviews: Review[];
  seat: string;
  startDate: string;
  tags: string[];
}

// Community
export interface IComment {
  id?: number;
  profile: string;
  nickname: string;
  content: string;
}

export interface ICommunity {
  id: number;
  title: string;
  content: string;
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
  children?: SVGProps<SVGSVGElement> | React.ReactNode;
  bgColor?: Colors | TwitterColor | GoogleColor | InstagramColor | FacebookColor;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}