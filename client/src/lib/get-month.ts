import { MONTHS } from '@/constants/auth.constants';

export const getMonth = (monthIndex: number) => {
	return MONTHS[monthIndex];
};
