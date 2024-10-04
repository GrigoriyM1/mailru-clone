import { IMinUser } from '@/types/auth.types';
import { create } from 'zustand';

type UseModalsStoreState = {
	isLoginModalOpen: boolean;
	setIsLoginModalOpen: (isOpen: boolean) => void;
	isLikedByModalOpen: boolean;
	setIsLikedByModalOpen: (isOpen: boolean) => void;
	likedBy: IMinUser[] | null
	setLikedBy: (likedBy: IMinUser[]) => void
};

export const useModalsStore = create<UseModalsStoreState>(set => ({
	isLoginModalOpen: false,
	setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),

	isLikedByModalOpen: false,
	setIsLikedByModalOpen: (isOpen: boolean) => set({ isLikedByModalOpen: isOpen }),
	likedBy: null,
	setLikedBy: (likedBy: IMinUser[]) => set({ likedBy})
}));
