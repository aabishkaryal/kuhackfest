import { useState, useContext } from "react";

import CategoryFilter from "./CategoryFilter";
import { Filter } from "@/types/filter";
import SearchFilter from "./SearchFilter";
import ShowListings from "./ShowListings";
import { exampleListings } from "@/types/Listings";
import { PageContext } from "@/context/PageContext";
import { PageType } from "@/types/pageType";

type BodyProps = {};
const defaultFilter: Filter = {
  searchQuery: "",
  priceType: "All",
};
export default function Body({}: BodyProps) {
  const [filter, updateFilter] = useState<Filter>(defaultFilter);
  const pageValue = useContext(PageContext);
  let pageType: PageType = "index";
  if (pageValue) {
    pageType = pageValue.pageType;
  }

  let isDashboard = pageType === "dashboard";
  let isSaved = pageType === "saved";

  return (
    <main className="flex flex-col max-w-[1200px] w-[90%]">
      <div
        className={`flex flex-col p-4 justify-center w-full ${
          !isDashboard &&
          !isSaved &&
          "border-2 border-transparent border-b-black"
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
          hideFilters={isDashboard || isSaved}
        />
        <CategoryFilter
          category={filter.category}
          setCategory={(pc) => updateFilter({ ...filter, category: pc })}
          hidden={isDashboard || isSaved}
        />
      </div>
      <ShowListings listings={exampleListings} filter={filter} />
    </main>
  );
}
