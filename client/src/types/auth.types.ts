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
