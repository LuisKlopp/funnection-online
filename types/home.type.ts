export type AgeGroupType = "10s" | "20s" | "30s" | "40s" | "50s+";
export type GenderType = "male" | "female";

export interface HomeQuestion {
  id: number;
  question: string;
  isActive: boolean;
  startAt: string | null;
  createdAt: string;
}

export interface HomeAnswer {
  id: number;
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
  likeCount: number;
  isHidden: boolean;
  createdAt: string;
  updatedAt: string;
  nickname: string;
}

export interface HomeResponse {
  question: HomeQuestion;
  answers: HomeAnswer[];
}
