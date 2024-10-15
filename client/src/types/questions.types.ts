import { IMinUser } from './auth.types';

export interface IQuestion {
	id: string;
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
	additionals: IAdditional[];
}

export interface ICreateQuestion {
	themeText: string;
	text: string;
	category: string;
	subcategory: string;
}

export interface IComment {
	id: string;
	createdAt: string;
	updatedAt: string;
	text: string;
	userId: string;
	user: IMinUser;
}

export interface IAnswer {
	id: string;
	createdAt: string;
	updatedAt: string;
	isBestAnswer: boolean;
	questionId: string;
	text: string;
	userId: string;

	likes: number;
	likedBy: IMinUser[];

	comments: IComment[];

	user: IMinUser;
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

export interface IAnswerForm {
	text: string;
}

export interface IAdditional {
	id: string;
	createdAt: string;
	questionId: string;
	text: string;
}
