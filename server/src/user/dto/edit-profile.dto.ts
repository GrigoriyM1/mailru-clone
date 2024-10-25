import { IsString } from "class-validator";

export class EditProfileDto {
  @IsString()
  description: string;
}