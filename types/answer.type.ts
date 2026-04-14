import { AgeGroupType, GenderType } from "./home.type";

export interface AnswerType {
  id: number;
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
  nickname: string;
  anonId: string;
  likeCount: number;
  isHidden: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAnswerRequest {
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
  nickname: string;
  anonId?: string;
}

export interface CreateAnswerResponse {
  success: boolean;
  hasAnswered: boolean;
  answer: AnswerType;
}

export interface ListAnswerType {
  answers: AnswerType[];
  hasAnswered: boolean;
}
