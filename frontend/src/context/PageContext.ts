import { PageType } from "@/types/pageType";
import { createContext } from "react";

type PageContentValueType = {
  pageType: PageType;
  setPageType: (pt: PageType) => void;
};

export const PageContext = createContext<PageContentValueType | null>(null);
