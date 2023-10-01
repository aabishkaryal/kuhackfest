export function calculateTimeLeft(createdAt: string, bidTime: number): string {
  const inMs = calculateTimeLeftInMs(createdAt, bidTime);
  const days = Math.floor(inMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((inMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((inMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((inMs % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function calculateTimeLeftInMs(
  createdAt: string,
  bidTime: number
): number {
  return new Date(createdAt).getTime() + bidTime * 86_400 * 1000 - Date.now();
}
