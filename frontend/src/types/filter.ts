import { IconType } from "react-icons";
import { BiSolidBed, BiHome } from "react-icons/bi";
import { FaMobile } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";
export const productCategories = [
  "Electronics",
  "Furniture",
  "Clothing",
  "Vehicles",
  "Other",
] as const;
export type ProductCategory = (typeof productCategories)[number] | "All";

export const allCategoryDetails: [ProductCategory, IconType][] = [
  ["Electronics", FaMobile],
  ["Furniture", BiSolidBed],
  ["Clothing", GiClothes],
  ["Vehicles", RiMotorbikeFill],
  ["Other", BiHome],
];

export const locations = ["Kathmandu", "Butwal", "Pokhara"] as const;
export type Location = (typeof locations)[number] | "All";

export const priceRanges = [
  "0 - 1,000",
  "1,000 - 5,000",
  "5,000 - 10,000",
  "10,000 - 50,000",
  "50,000+",
] as const;
export type PriceRange = (typeof priceRanges)[number] | "All";

export const priceTypes = ["Paid", "Free"] as const;
export type PriceType = (typeof priceTypes)[number] | "All";

export type Filter = {
  searchQuery: string;
  priceType: PriceType;
  category?: ProductCategory;
  location?: Location;
  priceRange?: PriceRange;
};
