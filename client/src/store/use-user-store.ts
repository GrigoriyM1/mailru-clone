import { IAuthResponse, IUser } from '@/types/auth.types';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { create } from 'zustand';

type MutateType = UseMutateFunction<
	AxiosResponse<IAuthResponse, any>,
	Error,
	void,
	void
> | null;

type UseUserStoreState = {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
	user: IUser | null;
	setUser: (user: IUser | null) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	mutate: MutateType;
	setMutate: (mutate: MutateType) => void;
};

export const useUserStore = create<UseUserStoreState>(set => ({
	isAuth: false,
	setIsAuth: isAuth => set({ isAuth }),
	user: null,
	setUser: user => set({ user }),
	isLoading: true,
	setIsLoading: isLoading => set({ isLoading }),
	mutate: null,
	setMutate: (mutate: MutateType) => set({ mutate }),
}));
