export type ClassStatus = '모집전' | '모집중' | '모집완료';

// TODO: 실제 프로젝트보고 수정할수도 있음
export interface Camp {
  id: number;
  type?: 'popular' | 'discount';
  applyStatus: ClassStatus;
  skill?: string;
  campTitle: string;
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

