import { z } from 'zod';

export const editProfilePageSchema = z.object({
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
});
