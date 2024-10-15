import { axiosWithAuth } from '@/api/interceptors';
import { IAnswer, IAnswerForm } from '@/types/questions.types';

class AnswerService {
	private BASE_URL = '/answer';

	async create(data: IAnswerForm, id: string) {
		const response = await axiosWithAuth.post<IAnswer>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async update(data: IAnswerForm, id: string) {
		const response = await axiosWithAuth.put<IAnswer>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IAnswer>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}

	async like(id: string) {
		const response = await axiosWithAuth.put<IAnswer>(
			`${this.BASE_URL}/like/${id}`
		);
		return response.data;
	}

	async comment(id: string, text: string) {
		const response = await axiosWithAuth.put<IAnswer>(
			`${this.BASE_URL}/comment/${id}`,
			{ text }
		);
		return response.data;
	}

	async bestAnswer(id: string, questionId: string) {
		const response = await axiosWithAuth.put<IAnswer>(
			`${this.BASE_URL}/best-answer/${id}`,
			{ questionId }
		);
		return response.data;
	}
}

export const answerService = new AnswerService();
