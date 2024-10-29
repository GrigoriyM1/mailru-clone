import { ICategories } from '@/types/questions.types';
import { create } from 'zustand';

type UseSearchStoreState = {
	categories: ICategories | null;
	setCategories: (categories: ICategories | null) => void;
	isCategoriesPending: boolean;
	setIsCategoriesPending: (isCategoriesPending: boolean) => void;
};

export const useSearchStore = create<UseSearchStoreState>(set => ({
	categories: null,
	setCategories: (categories: ICategories | null) => set({ categories }),
	isCategoriesPending: false,
	setIsCategoriesPending: (isCategoriesPending: boolean) => set({ isCategoriesPending }),
}));
