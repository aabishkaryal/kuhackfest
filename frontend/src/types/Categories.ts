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
export const allProductCategoryDetails: [productCategory, IconType][] = [
  [productCategory.Electronics, FaMobile],
  [productCategory.Furniture, BiSolidBed],
  [productCategory.Clothing, GiClothes],
  [productCategory.Vehicles, RiMotorbikeFill],
  [productCategory.Others, BiHome],
];
