export const formatPasswordInput = (password: string): string => {
	const formattedPassword = password.replace(/[^a-zA-Z0-9]/g, '');
	return formattedPassword;
};