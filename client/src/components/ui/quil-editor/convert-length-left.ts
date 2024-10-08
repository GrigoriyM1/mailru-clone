export const convertLengthLeft = (maxLength: number, editorText: string) => {
	return maxLength - editorText.replace('\n', '').length;
};
