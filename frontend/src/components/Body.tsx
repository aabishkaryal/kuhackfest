import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import { productCategory, priceCategory } from "@/types/Categories";
import SearchFilter from "./SearchFilter";
import Listings from "./Listings";

type BodyProps = {};

export default function Body({}: BodyProps) {
  const [searchText, setSearchText] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] =
    useState<productCategory>(productCategory.All);
  const [priceCategoryFilter, setPriceCategoryFilter] = useState<priceCategory>(
    priceCategory.All
  );
  return (
    <main className="flex flex-row">
      <CategoryFilter
        productCategoryFilter={productCategoryFilter}
        setProductCategoryFilter={setProductCategoryFilter}
        priceCategoryFilter={priceCategoryFilter}
        setPriceCategoryFilter={setPriceCategoryFilter}
      />
      <div className="flex flex-col">
        <SearchFilter searchText={searchText} setSearchText={setSearchText} />
        <Listings />
      </div>
    </main>
  );
}
