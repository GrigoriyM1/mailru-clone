import {
	IsEmail,
	IsString,
	MinLength,
	MaxLength,
	Matches,
	IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
	@ApiProperty({ minLength: 2, maxLength: 30, description: 'Имя пользователя' })
	@IsString({ message: 'Укажите имя' })
	@MinLength(2, { message: 'Имя должно содержать не менее 2-х символов' })
	@MaxLength(30, { message: 'Имя должно содержать не более 30 символов' })
	name: string;

	@ApiProperty({
		minLength: 2,
		maxLength: 30,
		description: 'Фамилия пользователя',
	})
	@IsString({ message: 'Укажите фамилию' })
	@MinLength(2, { message: 'Фамилия должна содержать не менее 2-х символов' })
	@MaxLength(30, { message: 'Фамилия должна содержать не более 30 символов' })
	lastName: string;

	@ApiProperty({ example: '2022-09-06', description: 'Дата рождения' })
	@IsString({ message: 'Укажите дату рождения' })
	birthdate: string;

	@ApiProperty({
		description: 'Пол пользователя',
		enum: ['male', 'female'],
	})
	@IsString({ message: 'Укажите пол' })
	@IsEnum(['male', 'female'], { message: 'Укажите корректный пол' })
	gender: string;

	@ApiProperty({
		description: 'E-mail пользователя',
		example: 'user@example.com',
	})
	@IsString({ message: 'Укажите e-mail' })
	@IsEmail({}, { message: 'Укажите корректный e-mail' })
	email: string;

	@ApiProperty({
		description: 'Привязанный e-mail',
		example: 'user@example.com',
	})
	@IsString({ message: 'Укажите привязанный e-mail' })
	@IsEmail({}, { message: 'Укажите корректный привязанный e-mail' })
	linkedEmail: string;

	@ApiProperty({
		description: 'Телефон пользователя',
		minLength: 5,
		pattern: '^\\+?[0-9\\s\\-\\(\\)]+$',
		example: '+1234567890',
	})
	@IsString({ message: 'Укажите телефон' })
	@MinLength(5, { message: 'Укажите корректный номер телефона' })
	@Matches(/^\+?[0-9\s\-\(\)]+$/, {
		message: 'Укажите корректный номер телефона',
	})
	phone: string;

	@ApiProperty({
		minLength: 6,
		maxLength: 30,
		description: 'Пароль пользователя',
	})
	@IsString({ message: 'Укажите пароль' })
	@MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
	@MaxLength(30, { message: 'Пароль должен содержать не более 30 символов' })
	password: string;
}
