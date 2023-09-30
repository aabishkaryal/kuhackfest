export const pageTypes = ["dashboard", "index"] as const;

export type PageType = (typeof pageTypes)[number];
