import { useState, useContext } from "react";

import CategoryFilter from "./CategoryFilter";
import { Filter } from "@/types/filter";
import SearchFilter from "./SearchFilter";
import ShowListings from "./ShowListings";
import { exampleListings } from "@/types/Listings";
import { PageContext } from "@/context/PageContext";

type BodyProps = {};
const defaultFilter: Filter = {
  searchQuery: "",
  priceType: "all",
};
export default function Body({}: BodyProps) {
  const [filter, updateFilter] = useState<Filter>(defaultFilter);
  const pageValue = useContext(PageContext);
  let dashboard = false;
  if (pageValue) {
    dashboard = pageValue.pageType === "dashboard";
  }
  return (
    <main className="flex flex-col max-w-[1200px] w-[90%]">
      <div
        className={`flex flex-col p-4 justify-center w-full ${
          !dashboard && "border-2 border-transparent border-b-black"
        }`}
      >
        <SearchFilter
          searchText={filter.searchQuery}
          setSearchText={(s) => updateFilter({ ...filter, searchQuery: s })}
          location={filter.location}
          setLocation={(l) => updateFilter({ ...filter, location: l })}
          priceRange={filter.priceRange}
          setPriceRange={(pr) => updateFilter({ ...filter, priceRange: pr })}
          priceType={filter.priceType}
          setPriceType={(pt) => updateFilter({ ...filter, priceType: pt })}
          dashboard={dashboard}
        />
        <CategoryFilter
          category={filter.category}
          setCategory={(pc) => updateFilter({ ...filter, category: pc })}
          dashboard={dashboard}
        />
      </div>
      <ShowListings listings={exampleListings} filter={filter} />
    </main>
  );
}
