import { z } from 'zod';

export const askQuestionSchema = z.object({
	themeText: z
		.string()
		.min(6, { message: 'Тема вопроса должна быть не менее 6 символов' }),
	text: z.string().optional(),
	category: z.string().optional(),
	subcategory: z.string().optional(),
});
