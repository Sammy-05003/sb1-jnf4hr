export function getDateRange(range: string): Date {
  const now = new Date();
  switch (range) {
    case '7d':
      return new Date(now.setDate(now.getDate() - 7));
    case '1m':
      return new Date(now.setMonth(now.getMonth() - 1));
    case '3m':
      return new Date(now.setMonth(now.getMonth() - 3));
    case '6m':
      return new Date(now.setMonth(now.getMonth() - 6));
    case '1y':
      return new Date(now.setFullYear(now.getFullYear() - 1));
    default:
      return new Date(now.setDate(now.getDate() - 7));
  }
}

export function filterDataByDate<T extends { date: string }>(
  data: T[],
  range: string
): T[] {
  const startDate = getDateRange(range);
  return data.filter(item => new Date(item.date) >= startDate);
}