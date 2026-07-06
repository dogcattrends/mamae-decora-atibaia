const TIME_ZONE = 'America/Sao_Paulo';

const monthFormatter = new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
  timeZone: TIME_ZONE,
});

const datePartsFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  timeZone: TIME_ZONE,
});

export function getUrgencyCopy(date: Date) {
  const parts = datePartsFormatter.formatToParts(date);
  const year = Number(parts.find((part) => part.type === 'year')?.value);
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  const nextMonthDate = new Date(Date.UTC(year, month, 1, 12));

  return {
    year: String(year),
    currentMonth: monthFormatter.format(date),
    nextMonth: monthFormatter.format(nextMonthDate),
  };
}
