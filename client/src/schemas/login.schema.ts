import { verifyEmailInput } from '@/lib/verify-email-input';
import { z } from 'zod';

export const loginSchemaEmail = z.object({
	email: z.object({
		email: z
			.string({ message: 'Укажите e-mail' })
			.min(1, { message: 'Укажите e-mail' })
			.min(5, { message: 'Email должен содержать не менее 5 символов' })
			.max(31, { message: 'Email должен содержать не более 31 символов' })
			.refine(
				value => {
					return value.includes('@')
						? z.string().email().safeParse(value).success
						: verifyEmailInput(value);
				},
				{ message: 'Некорректный формат email' }
			),
		domain: z.string().optional(),
	}),
});

export const loginSchemaPassword = z.object({
	password: z // TODO: ДЛЯ ПАРОЛЬ ПОТОМ ДРУГАЯ SHEMA ЕЩЕ 1
		.string({ message: 'Укажите пароль' })
		.min(1, {
			message: 'Укажите пароль',
		})
		.min(6, { message: 'Пароль должен содержать не менее 6 символов' })
		.max(30, { message: 'Пароль должен содержать не более 30 символов' }),
});
