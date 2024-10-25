import { z } from 'zod';

export const editProfileSchema = z.object({
	description: z
		.string()
		.max(250, { message: 'Описание должно содержать максимум 250 символов' }),
});
