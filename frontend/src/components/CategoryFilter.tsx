import { Dispatch, SetStateAction } from "react";

import { allProductCategoryDetails, productCategory } from "@/types/Categories";

type CategoryFilterProps = {
  productCategoryFilter: productCategory;
  setProductCategoryFilter: Dispatch<SetStateAction<productCategory>>;
};

export default function CategoryFilter({
  productCategoryFilter,
  setProductCategoryFilter,
}: CategoryFilterProps) {
  const handleClick = (productCategory: productCategory) => {
    setProductCategoryFilter(productCategory);
  };
  return (
    <section className="w-full flex flex-row justify-around mt-8">
      {allProductCategoryDetails.map(([productCategory, Icon]) => (
        <div
          key={productCategory}
          className="space-y-2 my-1 flex flex-col justify-center items-center p-2  cursor-pointer"
          onClick={() => handleClick(productCategory)}
        >
          <span className="bg-white rounded-full w-16 h-16 p-4 flex items-center justify-center">
            <Icon className="w-full h-full" />
          </span>
          <p className="text-lg">{productCategory}</p>
        </div>
      ))}
    </section>
  );
}
