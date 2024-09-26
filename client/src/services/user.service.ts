import { axiosClassic } from '@/api/interceptors';

class UserService {
	private BASE_URL = '/user';

	async getByEmail(email: string) {
		const response = await axiosClassic.post<boolean>(
			this.BASE_URL + '/get-by-email',
			{ email }
		);
		return response.data;
	}
}

export const userService = new UserService();
