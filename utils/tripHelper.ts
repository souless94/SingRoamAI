export function calculateTripLength(startDate: string, endDate: string): number {
  if (!startDate || !endDate) return 0;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);

  return diffDays + 1; // include start day
}

/**
 * Optionally, make sure endDate is not before startDate
 */
export function adjustEndDate(startDate: string, endDate?: string): string {
  if (!startDate) return endDate || "";
  if (!endDate || new Date(endDate) < new Date(startDate)) return startDate;
  return endDate;
}