export const formatEmailInput = (email: string, type: 'default' | 'expanded' = 'default') => {
  if (type === 'default') {
    return email.replace(/[^a-zA-Z0-9._\-]/g, '');
  } else {
    return email.replace(/[^a-zA-Z0-9._\-@]/g, '');
  }
};

// console.log(formatEmailInput('test@mail.ru')); 
// console.log(formatEmailInput('test.  dsa')); 
// Введено некорректное имя ящика. Имя не должно содержать идущие друг за другом знак подчеркивания, точку и минус.
