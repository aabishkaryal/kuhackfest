export enum productCategory {
  Electronics = "electronics",
  Furniture = "furniture",
  Clothing = "clothing",
  Housing = "housing",
  All = "all",
}
export const allProductCategories = [
  productCategory.Electronics,
  productCategory.Furniture,
  productCategory.Clothing,
  productCategory.Housing,
];

export enum priceCategory {
  Free = "free",
  Paid = "paid",
  All = "all",
}
export const allPriceCategories = [priceCategory.Free, priceCategory.Paid];
