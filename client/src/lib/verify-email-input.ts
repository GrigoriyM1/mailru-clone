export const verifyEmailInput = (email: string) => {
  const localPart = email.trim();
	return (
		/^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[a-zA-Z0-9]$/.test(
			localPart
		) &&
		!/\.{2,}/.test(localPart) &&
		!/[._]{2,}/.test(localPart)
	);
};
