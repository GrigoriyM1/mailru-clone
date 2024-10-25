import { IsString } from "class-validator";

export class EditProfilePageDto {
  @IsString()
  name: string;
  
  @IsString()
  lastName: string;

  @IsString()
  birthdate: string;

  @IsString()
  gender: string;
}