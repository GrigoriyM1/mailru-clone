export const getDaysCount = (
	month: number | string | undefined,
	year: number | string | undefined
) => {
	if (typeof month !== 'number') {
		month = new Date().getMonth() + 1;
	}
	if (typeof year !== 'number') {
		year = new Date().getFullYear();
	}
	return new Date(year, month, 0).getDate();
};
