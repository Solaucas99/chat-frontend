export const returnTodayDate = () => {
  const todayDate = new Date(Date.now());

  const dayToday =
    todayDate.getDate() <= 9
      ? `0${todayDate.getDate()}`
      : `${todayDate.getDate()}`;

  const monthToday =
    todayDate.getMonth() + 1 <= 9
      ? `0${todayDate.getMonth() + 1}`
      : `${todayDate.getMonth() + 1}`;

  const yearToday = todayDate.getFullYear();

  return `${dayToday}/${monthToday}/${yearToday}`;
};
