import { Dispatch, SetStateAction } from "react";

import {
  allPriceCategories,
  allProductCategories,
  priceCategory,
  productCategory,
} from "@/types/Categories";

type CategoryFilterProps = {
  productCategoryFilter: productCategory;
  priceCategoryFilter: priceCategory;
  setProductCategoryFilter: Dispatch<SetStateAction<productCategory>>;
  setPriceCategoryFilter: Dispatch<SetStateAction<priceCategory>>;
};

export default function CategoryFilter({
  productCategoryFilter,
  priceCategoryFilter,
  setProductCategoryFilter,
  setPriceCategoryFilter,
}: CategoryFilterProps) {
  return (
    <div>
      <section>
        <h3>Product Category:</h3>
        {allProductCategories.map((productCategory) => (
          <div key={productCategory} className="space-x-2 my-1">
            <input
              type="radio"
              id={productCategory}
              onSelect={() => setProductCategoryFilter(productCategory)}
              checked={productCategoryFilter === productCategory}
            />
            <label htmlFor={productCategory}>{productCategory}</label>
          </div>
        ))}
        <h3>Price Category:</h3>
        {allPriceCategories.map((priceCategory) => (
          <div key={priceCategory} className="space-x-2 my-1">
            <input
              type="radio"
              id={priceCategory}
              onSelect={() => setPriceCategoryFilter(priceCategory)}
              checked={priceCategoryFilter === priceCategory}
            />
            <label htmlFor={priceCategory}>{priceCategory}</label>
          </div>
        ))}
      </section>
    </div>
  );
}
