import { IQuestion } from '@/types/questions.types';
import { create } from 'zustand';

type UseQuestionStoreState = {
	isQuestionPending: boolean;
	setIsQuestionPending: (isQuestionPending: boolean) => void;
	isQuestionsPending: boolean;
	setIsQuestionsPending: (isQuestionsPending: boolean) => void;

	question: IQuestion | null;
	setQuestion: (question: IQuestion | null) => void;
};

export const useQuestionStore = create<UseQuestionStoreState>(set => ({
	isQuestionPending: false,
	setIsQuestionPending: (isQuestionPending: boolean) => set({ isQuestionPending }),
	isQuestionsPending: false,
	setIsQuestionsPending: (isQuestionsPending: boolean) => set({ isQuestionsPending }),

	question: null,
	setQuestion: (question: IQuestion | null) => set({ question }),
}));
