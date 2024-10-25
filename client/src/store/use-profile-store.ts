import { IQuestionsWithLength } from '@/types/questions.types';
import { create } from 'zustand';

type UseProfileStore = {
	profileQuestions: IQuestionsWithLength | null;
	setProfileQuestions: (questions: IQuestionsWithLength) => void;
	isProfileQuestionsLoading: boolean;
	setIsProfileQuestionsLoading: (isLoading: boolean) => void;
};

export const useProfileStore = create<UseProfileStore>(set => ({
	profileQuestions: null,
	setProfileQuestions: questions => set({ profileQuestions: questions }),
	isProfileQuestionsLoading: true,
	setIsProfileQuestionsLoading: isLoading =>
		set({ isProfileQuestionsLoading: isLoading }),
}));
