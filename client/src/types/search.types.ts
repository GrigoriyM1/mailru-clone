import { IQuestion } from "./questions.types";

export interface ISearchForm {
	searchText: string;
	category: string;
	subcategory: string;
	time: string;
	type: string;
	order: string;
}

export interface IQuestionsSearch {
	data: IQuestion[];
	matchesLength: number;
}
