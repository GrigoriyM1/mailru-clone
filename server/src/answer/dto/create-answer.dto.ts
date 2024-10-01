import { IsString } from "class-validator";

export class AnswerDto {
  @IsString()
  text: string;
}