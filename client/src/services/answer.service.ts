import { axiosWithAuth } from "@/api/interceptors";
import { IAnswer, IAnswerForm } from "@/types/questions.types";

class AnswerService {
	private BASE_URL = '/answer';

	async create(data: IAnswerForm, id: string) {
		const response = await axiosWithAuth.post<IAnswer>(`${this.BASE_URL}/${id}`, data);
		return response.data;
	}
};

export const answerService = new AnswerService();