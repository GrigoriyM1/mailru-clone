import { IRegisterData, IAuthResponse, ILoginData } from '@/types/auth.types';
import { axiosClassic } from '@/api/interceptors';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
	async register(data: IRegisterData) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/register`,
			data
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	},
	async login(data: ILoginData) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/login`,
			data
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	},

	async getNewTokens() {
		console.log('GET NEW TOKENS ')
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout');

		if (response.data) removeFromStorage();

		return response;
	},
};
