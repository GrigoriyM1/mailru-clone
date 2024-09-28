import { IsOptional, IsString } from "class-validator";

export class QuestionDto {
  @IsString()
  themeText: string

  @IsString()
  @IsOptional()
  text: string

  @IsString()
  category: string
  
  @IsString()
  subcategory: string
}

