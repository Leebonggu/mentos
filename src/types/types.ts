export type ClassStatus = "모집전" | "모집중" | "모집완료";

// TODO: 실제 프로젝트보고 수정할수도 있음
export interface Camp {
  id: number;
  type: "popular" | "discount";
  status: ClassStatus;
  category?: string;
  skill?: string;
  campName: string;
  thumbnail: string;
  dateStart: string;
}
