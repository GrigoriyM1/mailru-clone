import { IMinUser } from './auth.types';

export interface IQuestion {
	id: string;
	additionals: string[];
	createdAt: string;
	isLeader: boolean;
	likes: number;
	themeText: string;
	text: string;
	category: string;
	subcategory: string;
	userId: string;

	answers: IAnswer[];
	user: IMinUser;
	likedBy: IMinUser[];
}

export interface ICreateQuestion {
	themeText: string;
	text: string;
	category: string;
	subcategory: string;
}

export interface IAnswer {
	id: string;
	createdAt: string;
	updatedAt: string;
	isBestAnswer: boolean;
	likes: number;
	questionId: string;
	text: string;
	userId: string;

	user: IMinUser;
	// TODO: тут остановился
}

export interface ICategories {
	[key: string]: {
		name: string;
		[key: string]: string;
	};
}

export interface IQuestionForm {
	themeText: string;
	text: string;
	category: string;
	subcategory: string;
}

export interface IUpdatedLikes {
	likes: number;
	likedBy: IMinUser[];
}
