import { IAnswer, IAnswersWithLength, IQuestionsWithLength } from '@/types/questions.types';
import { create } from 'zustand';

type UseProfileStore = {
	profileQuestions: IQuestionsWithLength | null;
	setProfileQuestions: (questions: IQuestionsWithLength) => void;
	isProfileQuestionsLoading: boolean;
	setIsProfileQuestionsLoading: (isLoading: boolean) => void;

	profileAnswers: IAnswersWithLength | null;
	setProfileAnswers: (answers: IAnswersWithLength | null) => void;
	setIsProfileAnswersLoading: (isLoading: boolean) => void;
	isProfileAnswersLoading: boolean;
};

export const useProfileStore = create<UseProfileStore>(set => ({
	profileQuestions: null,
	setProfileQuestions: questions => set({ profileQuestions: questions }),
	isProfileQuestionsLoading: true,
	setIsProfileQuestionsLoading: isLoading =>
		set({ isProfileQuestionsLoading: isLoading }),

	profileAnswers: null,
	setProfileAnswers: answers => set({ profileAnswers: answers }),
	isProfileAnswersLoading: true,
	setIsProfileAnswersLoading: isLoading =>
		set({ isProfileAnswersLoading: isLoading }),
}));
