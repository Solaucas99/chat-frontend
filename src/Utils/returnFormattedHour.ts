export const returnFormattedHour = (date: string): string => {
  const messageDate = new Date(date)
    .toLocaleTimeString('pt-BR', {
      hour12: false,
    })
    .split(':');

  return `${messageDate[0]}:${messageDate[1]}`;
};
