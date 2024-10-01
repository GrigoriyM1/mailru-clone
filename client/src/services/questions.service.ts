import { axiosWithAuth } from '@/api/interceptors';
import { IQuestion } from '@/types/questions.types';

export const questionsService = {
	// TODO: потом может skip take
	getAll: async () => {
		const response = await axiosWithAuth.get<IQuestion[]>('/question');
		return response.data;
	},
};
