import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class GetByEmailDto {
  @ApiProperty({
    example: 'alek9051@gmail.com',
    description: 'Email пользователя',
  })
  @IsString({ message: 'Укажите e-mail' })
  @IsEmail({}, { message: 'Неверный формат почты' })
  email: string;
}