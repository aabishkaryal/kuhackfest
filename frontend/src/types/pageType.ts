export const pageTypes = ["dashboard", "saved", "index"] as const;

export type PageType = (typeof pageTypes)[number];
