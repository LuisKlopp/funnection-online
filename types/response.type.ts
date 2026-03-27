import { AgeGroupType, GenderType } from "./home.type";

export interface ResponsesData {
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
