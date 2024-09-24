export interface IError extends Error {
	response?: {
		data?: {
			errors?: {
				[key: string]: string;
			};
		};
	};
}
