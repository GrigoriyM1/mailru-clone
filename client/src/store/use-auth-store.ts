import { IUser } from '@/types/auth.types';
import { create } from 'zustand';

type ExitModalState = {
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
  user: IUser | null
  setUser: (user: IUser | null) => void;
};

export const useExitModal = create<ExitModalState>(set => ({
	isAuth: false,
	setIsAuth: (isAuth) => set({ isAuth }),
  user: null,
  setUser: (user) => set({ user }),
}));
