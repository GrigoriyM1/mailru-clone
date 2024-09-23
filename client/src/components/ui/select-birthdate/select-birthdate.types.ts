export interface IBirthdate {
	day: string | number;
	month: string | number;
	year: string | number;
}

export interface IBirthdateErrors {
	birthdate: string;
}

export interface IBirthdateRegister {
	birthdate: IBirthdate;
}