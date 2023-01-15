export const returnYesterdayDate = (): string => {
  const todayDate = new Date(Date.now());

  const yesterdayDate = new Date(Date.now());
  yesterdayDate.setDate(todayDate.getDate() - 1);

  const dayYesterday =
    yesterdayDate.getDate() <= 9
      ? `0${yesterdayDate.getDate()}`
      : `${yesterdayDate.getDate()}`;

  const monthYesterday =
    yesterdayDate.getMonth() + 1 <= 9
      ? `0${yesterdayDate.getMonth() + 1}`
      : `${yesterdayDate.getMonth() + 1}`;

  const yearYesterday = yesterdayDate.getFullYear();

  return `${dayYesterday}/${monthYesterday}/${yearYesterday}`;
};
