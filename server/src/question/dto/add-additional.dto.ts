import { IsString } from "class-validator";

export class AddAdditionalDto {
  @IsString()
  additional: string;
}