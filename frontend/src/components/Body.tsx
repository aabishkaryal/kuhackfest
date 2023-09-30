import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import { productCategory } from "@/types/filter";
import SearchFilter from "./SearchFilter";
import ShowListings from "./ShowListings";
import { Location } from "@/types/filter";
import { PriceRange } from "@/types/filter";

type BodyProps = {};

export default function Body({}: BodyProps) {
  const [searchText, setSearchText] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] =
    useState<productCategory>(productCategory.All);
  const [locationFilter, setLocationFilter] = useState<Location | null>(null);
  const [priceRangeFilter, setPriceRangeFilter] = useState<PriceRange | null>(
    null
  );
  const [priceTypeFilter, setPriceTypeFilter] = useState<"paid" | "free">(
    "paid"
  );
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
      <ShowListings listings={[]} />
    </main>
  );
}
