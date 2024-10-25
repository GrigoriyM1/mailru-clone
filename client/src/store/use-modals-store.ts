import { IMinUser } from '@/types/auth.types';
import { create } from 'zustand';

type UseModalsStoreState = {
	isLoginModalOpen: boolean;
	setIsLoginModalOpen: (isOpen: boolean) => void;
	isLikedByModalOpen: boolean;
	setIsLikedByModalOpen: (isOpen: boolean) => void;
	likedBy: IMinUser[] | null;
	setLikedBy: (likedBy: IMinUser[]) => void;
	isAdditionalModalOpen: boolean;
	setIsAdditionalModalOpen: (isOpen: boolean) => void;
	additionalQuestionId: string | null;
	setAdditionalQuestionId: (id: string) => void;
	isEditQuestionModalOpen: boolean;
	setIsEditQuestionModalOpen: (isOpen: boolean) => void;
	isEditProfileModalOpen: boolean;
	setIsEditProfileModalOpen: (isOpen: boolean) => void;
};

export const useModalsStore = create<UseModalsStoreState>(set => ({
	isLoginModalOpen: false,
	setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),

	isLikedByModalOpen: false,
	setIsLikedByModalOpen: (isOpen: boolean) =>
		set({ isLikedByModalOpen: isOpen }),
	likedBy: null,
	setLikedBy: (likedBy: IMinUser[]) => set({ likedBy }),

	isAdditionalModalOpen: false,
	setIsAdditionalModalOpen: (isOpen: boolean) =>
		set({ isAdditionalModalOpen: isOpen }),
	additionalQuestionId: null,
	setAdditionalQuestionId: (id: string) => set({ additionalQuestionId: id }),

	isEditQuestionModalOpen: false,
	setIsEditQuestionModalOpen: (isOpen: boolean) =>
		set({ isEditQuestionModalOpen: isOpen }),

	isEditProfileModalOpen: false,
	setIsEditProfileModalOpen: (isOpen: boolean) =>
		set({ isEditProfileModalOpen: isOpen }),
}));
