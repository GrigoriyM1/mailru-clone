export const combineEmailDomain = (email: string, domain: string) => {
	return email.includes('@') ? email : email + domain;
};
