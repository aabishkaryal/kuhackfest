import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import { Filter } from "@/types/filter";
import SearchFilter from "./SearchFilter";
import ShowListings from "./ShowListings";
import { exampleListings } from "@/types/Listings";

type BodyProps = {
  dashboard?: boolean;
};
const defaultFilter: Filter = {
  searchQuery: "",
  priceType: "all",
};
export default function Body({ dashboard = false }: BodyProps) {
  const [filter, updateFilter] = useState<Filter>(defaultFilter);
  return (
    <main className="flex flex-col max-w-[1200px] w-[90%]">
      <div className="flex flex-col bg-gray-100 p-4 justify-center w-full">
        <SearchFilter
          searchText={filter.searchQuery}
          setSearchText={(s) => updateFilter({ ...filter, searchQuery: s })}
          location={filter.location}
          setLocation={(l) => updateFilter({ ...filter, location: l })}
          priceRange={filter.priceRange}
          setPriceRange={(pr) => updateFilter({ ...filter, priceRange: pr })}
          priceType={filter.priceType}
          setPriceType={(pt) => updateFilter({ ...filter, priceType: pt })}
        />
        <CategoryFilter
          category={filter.category}
          setCategory={(pc) => updateFilter({ ...filter, category: pc })}
        />
        <hr className="my-4 border-1 border-gray-500" />
      </div>
      <ShowListings listings={exampleListings} filter={filter} />
    </main>
  );
}
