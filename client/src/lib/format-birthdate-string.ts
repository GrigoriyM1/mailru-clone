export const formatBirthdateString = (birthdate: string) => {
	const [day, month, year] = birthdate.split('.');
	return { day: Number(day), month: Number(month), year: Number(year) };
};
