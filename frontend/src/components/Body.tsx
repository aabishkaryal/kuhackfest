import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import { productCategory } from "@/types/Categories";
import SearchFilter from "./SearchFilter";
import Listings from "./Listings";

type BodyProps = {};

export default function Body({}: BodyProps) {
  const [searchText, setSearchText] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] =
    useState<productCategory>(productCategory.All);
  return (
    <main className="flex flex-col max-w-[1200px] w-[90%]">
      <div className="flex flex-col bg-gray-100 p-4 justify-center w-full">
        <SearchFilter searchText={searchText} setSearchText={setSearchText} />
        <CategoryFilter
          productCategoryFilter={productCategoryFilter}
          setProductCategoryFilter={setProductCategoryFilter}
        />
        <hr className="my-4 border-1 border-gray-500" />
      </div>
      <Listings />
    </main>
  );
}
