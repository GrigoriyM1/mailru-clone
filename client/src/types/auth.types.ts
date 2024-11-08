import { IBirthdate } from '@/components/ui/select-birthdate/select-birthdate.types';

export interface IRegisterForm {
	name: string;
	lastName: string;
	birthdate: IBirthdate;
	gender: string;
	email: {
		email: string;
		domain: string;
	};
	linkedEmail: string;
	phone: string;
	password: string;
}

export interface IRegisterData {
	name: string;
	lastName: string;
	birthdate: string;
	gender: string;
	email: string;
	linkedEmail: string;
	phone: string;
	password: string;
}

export interface ILoginForm {
	email: {
		email: string;
		domain: string;
	};
	password: string;
}
export interface ILoginData {
	email: string;
	password: string;
}

export interface IUser {
	id: string;
	name: string;
	lastName: string;

	email: string;
	linkedEmail: string;
	password: string;

	birthdate: string;
	gender: string;
	phone: string;
	avatar?: string;

	points: number;
	level: string;
	description?: string;

	createdAt: string;
	updatedAt: string;
}

export interface IMinUser {
	id: string;
	name: string;
	lastName: string;
	avatar?: string;
}

export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}

export interface IEditProfileForm {
	description: string;
}
export interface IEditProfilePageForm {
	name: string;
	lastName: string;
	birthdate: IBirthdate;
	gender: string;
}
export interface IEditProfilePageData {
	name: string;
	lastName: string;
	birthdate: string;
	gender: string;
}

// export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
