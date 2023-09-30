export const sortOptions = [
  "Lowest Price",
  "Highest Price",
  "Most Time Left",
  "Least Time Left",
] as const;

export type sortOption = (typeof sortOptions)[number];
