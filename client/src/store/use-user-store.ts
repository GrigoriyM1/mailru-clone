import { IUser } from '@/types/auth.types';
import { create } from 'zustand';

type UseUserStoreState = {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
  user: IUser | null
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useUserStore = create<UseUserStoreState>(set => ({
	isAuth: false,
	setIsAuth: (isAuth) => set({ isAuth }),
  user: null,
  setUser: (user) => set({ user }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
