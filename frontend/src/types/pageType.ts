export const pageTypes = [
  "dashboard",
  "saved",
  "sell",
  "edit",
  "index",
] as const;

export type PageType = (typeof pageTypes)[number];
