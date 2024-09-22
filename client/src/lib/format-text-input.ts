export const formatTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.trimStart();
};