import { axiosWithAuth } from '@/api/interceptors';
import {
	ICategories,
	IQuestion,
	IQuestionForm,
	IUpdatedLikes,
} from '@/types/questions.types';

export const questionsService = {
	// TODO: потом может skip take
	getAll: async () => {
		const response = await axiosWithAuth.get<IQuestion[]>('/question');
		return response.data;
	},

	getOne: async (id: string) => {
		const response = await axiosWithAuth.get<IQuestion>(
			`/question/get-one/${id}`
		);
		return response.data;
	},

	// TODO: ТУТ ОСТАНОВИЛСЯ
	create: async (data: IQuestionForm) => {
		const response = await axiosWithAuth.post<IQuestion>('/question', data);
		return response.data;
	},

	getCategories: async () => {
		const response = await axiosWithAuth.get<ICategories>(
			'/question/categories'
		);
		return response.data;
	},

	like: async (id: string) => {
		const response = await axiosWithAuth.patch<IUpdatedLikes>(
			`/question/like/${id}`
		);
		return response.data;
	},

	addAdditional: async (id: string, additional: string) => {
		const response = await axiosWithAuth.patch<IQuestion>(
			`/question/add-additional/${id}`,
			{ additional }
		);
		return response.data;
	},
};
