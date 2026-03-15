import { AgeGroupType, GenderType } from "./home.type";

export interface CreateAnswerRequest {
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
}
