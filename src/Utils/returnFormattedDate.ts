export const returnFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();

  const month =
    date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; // getMonth() returns month from 0 to 11

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
