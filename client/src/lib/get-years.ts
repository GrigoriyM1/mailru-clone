import { YEARS_FROM_NOW } from '@/constants/auth.constants';

export const getYears = (yearsFromNow: number = YEARS_FROM_NOW) => {
	const currentYear = new Date().getFullYear();
	const years = [];
	for (let i = 0; i < +yearsFromNow; i++) {
		years.push(currentYear - i);
	}

	return years;
};
