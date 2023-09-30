import { useState, useMemo } from "react";

import { filterListings } from "@/lib/filterListings";
import { Listing } from "@/types/Listings";
import { Filter } from "@/types/filter";
import { sortOption, sortOptions } from "@/types/sort";
import { sortListings } from "@/lib/sortListings";
import SingleListing from "./SingleListing";

type ListingsProps = {
  listings: Listing[];
  filters: Filter;
};

export default function ShowListings({ listings, filters }: ListingsProps) {
  const filteredListings = useMemo(
    () => filterListings(listings, filters),
    [listings, filters]
  );
  const [sortBy, setSortBy] = useState<sortOption>(sortOptions[0]);
  const sortedListings = useMemo(
    () => sortListings(filteredListings, sortBy),
    [filteredListings, sortBy]
  );
  return (
    <section className="w-full flex flex-col mt-4">
      <div className="flex flex-row justify-between p-4 items-end">
        <p className="text-2xl">Our Listings</p>
        <div className="flex flex-col">
          <p className="mr-2">Sort by</p>
          <select
            className="border-2 border-gray-200 rounded-md p-1"
            onChange={(e) => setSortBy(e.target.value as sortOption)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {sortedListings.length > 0 ? (
        <div className="flex gap-4 flex-row items-start justify-start flex-wrap">
          {sortedListings.map((listing) => (
            <SingleListing key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-xl">No Listings Available.</p>
        </div>
      )}
    </section>
  );
}
