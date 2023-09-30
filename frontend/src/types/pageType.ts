export const pageTypes = [
  "dashboard",
  "saved",
  "sell",
  "edit",
  "show",
  "index",
] as const;

export type PageType = (typeof pageTypes)[number];
