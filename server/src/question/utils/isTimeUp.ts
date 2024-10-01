export const isTimeUp = (minutes: number, questionCreatedAt: string) => {
  const now = new Date();
  const createdAt = new Date(questionCreatedAt);

  const thirtyMinutes = minutes * 60 * 1000;
  return now.getTime() - createdAt.getTime() > thirtyMinutes;
};

// console.log(isTimeUp(30, '2024-09-28 03:41:55.653'));
// console.log(isTimeUp(30, '2024-09-28T04:51:22.140Z'));