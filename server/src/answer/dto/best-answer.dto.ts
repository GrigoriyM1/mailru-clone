import { IsString } from "class-validator";

export class BestAnswerDto {
  @IsString()
  questionId: string;
}