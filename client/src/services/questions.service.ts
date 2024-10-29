import { axiosWithAuth } from '@/api/interceptors';
import {
	ICategories,
	IQuestion,
	IQuestionForm,
	IQuestionsWithLength,
	IUpdatedLikes,
} from '@/types/questions.types';

export const questionsService = {
	getAll: async (
		category?: string | undefined,
		skip?: number,
		take?: number
	) => {
		const response = await axiosWithAuth.get<IQuestion[]>('/question', {
			params: {
				skip,
				take,
				category,
			},
		});
		return response.data;
	},

	getOne: async (id: string) => {
		const response = await axiosWithAuth.get<IQuestion | string>(
			`/question/get-one/${id}`
		);
		return response.data;
	},

	create: async (data: IQuestionForm) => {
		const response = await axiosWithAuth.post<IQuestion>('/question', data);
		return response.data;
	},

	update: async (id: string, data: Partial<IQuestionForm>) => {
		const response = await axiosWithAuth.put<IQuestion>(
			`/question/${id}`,
			data
		);
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

	getLeaders: async ({
		category,
		take,
		skip,
	}: {
		category?: string;
		take?: number;
		skip?: number;
	}) => {
		const response = await axiosWithAuth.get<IQuestion[]>('/question/leaders', {
			params: {
				take,
				skip,
				category,
			},
		});
		return response.data;
	},

	getFromUser: async (
		userId: string,
		category: string,
		skip?: number,
		take?: number, // тут 
	) => {
		console.log('GET FORM USER  ', userId, category, take, skip);
		const response = await axiosWithAuth.get<IQuestionsWithLength>(
			`/question/user/${userId}/${category}`,
			{
				params: {
					take,
					skip,
				},
			}
		);
		return response.data;
	},
};
