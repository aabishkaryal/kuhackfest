import { Dispatch, SetStateAction, useCallback } from "react";

import { allCategoryDetails, ProductCategory } from "@/types/filter";

type CategoryFilterProps = {
  category?: ProductCategory;
  setCategory: (v: ProductCategory) => void;
  hidden: boolean;
};

export default function CategoryFilter({
  category,
  setCategory,
  hidden,
}: CategoryFilterProps) {
  if (hidden) return <></>;
  return (
    <section className="w-full flex flex-row justify-around mt-8">
      {allCategoryDetails.map(([pCategory, Icon]) => (
        <div
          key={pCategory}
          className={`space-y-2 my-1 flex flex-col justify-center items-center p-2  cursor-pointer ${
            pCategory == category && "bg-white"
          }`}
          onClick={() => setCategory(pCategory)}
          id={pCategory}
        >
          <span className="bg-white rounded-full w-16 h-16 p-4 flex items-center justify-center">
            <Icon className="w-full h-full" />
          </span>
          <p className="text-lg">{pCategory}</p>
        </div>
      ))}
    </section>
  );
}
