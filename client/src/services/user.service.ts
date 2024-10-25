import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import {
	IEditProfileForm,
	IEditProfilePageData,
	IEditProfilePageForm,
	IUser,
} from '@/types/auth.types';

class UserService {
	private BASE_URL = '/user';

	async getByEmail(email: string) {
		const response = await axiosClassic.post<boolean>(
			this.BASE_URL + '/get-by-email',
			{ email }
		);
		return response.data;
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IUser>(this.BASE_URL + '/' + id);
		return response.data;
	}

	async editProfile(data: IEditProfileForm) {
		const response = await axiosWithAuth.patch<IUser>(
			this.BASE_URL + '/edit-profile',
			data
		);
		return response.data;
	}

	async editProfilePage(data: IEditProfilePageData) {
		const response = await axiosWithAuth.patch<IUser>(
			this.BASE_URL + '/edit-profile-page',
			data
		);
		return response.data;
	}
}

export const userService = new UserService();
