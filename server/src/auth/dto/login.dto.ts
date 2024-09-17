import {
	IsEmail,
	IsString,
	MinLength,
	MaxLength,
	IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
	@ApiProperty({
		example: 'user@example.com',
		description: 'Email пользователя',
	})
	@IsString({ message: 'Укажите e-mail' })
	@IsEmail({}, { message: 'Неверный формат почты' })
	email: string;

	@ApiProperty({
		minLength: 6,
		maxLength: 30,
		description: 'Пароль пользователя',
	})
	@IsOptional() // TODO: по очереди потому что...
	@IsString({ message: 'Укажите пароль' })
	@MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
	@MaxLength(30, { message: 'Пароль должен содержать не более 30 символов' })
	password: string;
}
