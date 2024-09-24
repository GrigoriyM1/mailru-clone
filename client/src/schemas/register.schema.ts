import { EMAIL_DOMAINS } from '@/constants/auth.constants';
import { verifyEmailInput } from '@/lib/verify-email-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const RegisterSchema = z.object({
	name: z
		.string({ message: 'Укажите имя' })
		.min(1, { message: 'Укажите имя' })
		.min(2, { message: 'Имя должно содержать не менее 2-х символов' })
		.max(30, { message: 'Имя должно содержать не более 30 символов' }),
	lastName: z
		.string({ message: 'Укажите фамилию' })
		.min(1, { message: 'Укажите фамилию' })
		.min(2, { message: 'Фамилия должно содержать не менее 2-х символов' })
		.max(30, { message: 'Фамилия должно содержать не более 30 символов' }),
	birthdate: z.object({
		day: z
			.number({ message: 'Укажите день рождения' })
			.min(1, { message: 'Укажите день рождения' }),
		month: z
			.number({ message: 'Укажите месяц рождения' })
			.min(1, { message: 'Укажите месяц рождения' }),
		year: z
			.number({ message: 'Укажите год рождения' })
			.min(1, { message: 'Укажите год рождения' }),
	}),
	gender: z.enum(['male', 'female'], {
		message: 'Укажите ваш пол',
	}),
	email: z.object({
		email: z
			.string({ message: 'Укажите email' })
			.min(1, { message: 'Укажите email' })
			.min(5, { message: 'Email должен содержать не менее 5 символов' })
			.max(31, { message: 'Email должен содержать не более 31 символов' })
			.refine(
				value => {
					return verifyEmailInput(value);
				},
				{ message: 'Некорректный формат email' }
			),
		// todo: ЭТО И ДЛЯ ЛОГИНА может потом в отдельную функцию вынесу
		domain: z.enum(EMAIL_DOMAINS as [string, ...string[]], {
			message: 'Укажите домен',
		}),
	}),
	linkedEmail: z
		.string({ message: 'Укажите email' })
		.min(1, { message: 'Укажите email' })
		.email({ message: 'Укажите корректный email' }),
	phone: z
		.string({ message: 'Укажите номер телефона' })
		.min(1, { message: 'Укажите номер телефона' })
		.refine(isValidPhoneNumber, {
			message: 'Введите корректный номер телефона',
		}),
	password: z
		.string({ message: 'Укажите пароль' })
		.min(1, {
			message: 'Укажите пароль',
		})
		.min(6, { message: 'Пароль должен содержать не менее 6 символов' })
		.max(30, { message: 'Пароль должен содержать не более 30 символов' }),
});
