import { IconType } from "react-icons";
import { BiSolidBed, BiHome } from "react-icons/bi";
import { FaMobile } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";

export enum productCategory {
  Electronics = "Electronics",
  Furniture = "Furniture",
  Clothing = "Clothing",
  Vehicles = "Vehicles",
  Others = "Others",
  All = "All",
}
export const allCategoryDetails: [productCategory, IconType][] = [
  [productCategory.Electronics, FaMobile],
  [productCategory.Furniture, BiSolidBed],
  [productCategory.Clothing, GiClothes],
  [productCategory.Vehicles, RiMotorbikeFill],
  [productCategory.Others, BiHome],
];

export const locations = ["Kathmandu", "Butwal", "Pokhara"] as const;
export type Location = (typeof locations)[number];

export const priceRanges = [
  "0 - 1,000",
  "1,000 - 5,000",
  "5,000 - 10,000",
  "10,000 - 50,000",
  "50,000+",
] as const;
export type PriceRange = (typeof priceRanges)[number];

export const priceTypes = ["paid", "free", "all"] as const;
export type PriceType = (typeof priceTypes)[number];

export type Filter = {
  searchQuery: string;
  priceType: PriceType;
  category?: productCategory;
  location?: Location;
  priceRange?: PriceRange;
};
