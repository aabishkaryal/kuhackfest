import locations from "@/data/locations";
import priceRanges from "@/data/price-range";
import type { Dispatch, SetStateAction } from "react";

import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

type SearchFilterProps = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
};

export default function SearchFilters({
  searchText,
  setSearchText,
}: SearchFilterProps) {
  return (
    <section className="w-full flex flex-col space-y-4">
      <div className="w-full flex flex-row items-end justify-center">
        <div className="w-4/5 flex flex-col space-y-1">
          <label className="text-xs">What are you searching for?</label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 bg-white focus:outline-none px-4"
            placeholder="Search for products"
          />
        </div>
        <BiSearch className="text-[40px] bg-white p-2" />
        <button type="submit" className="bg-gray-300 p-2 w-1/8 mx-3 rounded-md">
          Search
        </button>
      </div>
      <div className="w-full flex flex-row items-end justify-around">
        <div className="w-1/5 flex flex-col space-y-1">
          <label className="text-xs">Location</label>
          <select className="w-full p-2 bg-white focus:outline-none px-4">
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/5 flex flex-col space-y-1">
          <label className="text-xs">Price</label>
          <select className="w-full p-2 bg-white focus:outline-none px-4">
            {priceRanges.map((priceRange) => (
              <option key={priceRange} value={priceRange}>
                {priceRange}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[10%] flex flex-col space-y-1">
          <select className="w-full p-2 bg-white focus:outline-none px-4">
            <option value="paid">Paid</option>
            <option value="free">Free</option>
          </select>
        </div>
      </div>
    </section>
  );
}
