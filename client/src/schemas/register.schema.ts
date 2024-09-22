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
	gender: z.enum(['male', 'female'], {
		message: 'Укажите пол',
	}),
});
