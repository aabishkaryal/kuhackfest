import { Dispatch, SetStateAction } from "react";

import { allProductCategories, productCategory } from "@/types/Categories";

type CategoryFilterProps = {
  productCategoryFilter: productCategory;
  setProductCategoryFilter: Dispatch<SetStateAction<productCategory>>;
};

export default function CategoryFilter({
  productCategoryFilter,
  setProductCategoryFilter,
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
      </section>
    </div>
  );
}
