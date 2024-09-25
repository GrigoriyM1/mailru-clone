import { IUser } from '@/types/auth.types';
import { create } from 'zustand';

type UseModalsStoreState = {
	isLoginModalOpen: boolean;
	setIsLoginModalOpen: (isOpen: boolean) => void;
};

export const useModalsStore = create<UseModalsStoreState>(set => ({
	isLoginModalOpen: false,
	setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),
}));
