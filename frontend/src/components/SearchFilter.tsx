import { Location, PriceRange, PriceType, locations } from "@/types/filter";
import { priceRanges } from "@/types/filter";

import { BiSearch } from "react-icons/bi";

type SearchFilterProps = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  location?: Location;
  setLocation: (location: Location | undefined) => void;
  priceRange?: PriceRange;
  setPriceRange: (priceRange: PriceRange | undefined) => void;
  priceType: PriceType;
  setPriceType: (priceType: PriceType) => void;
};

export default function SearchFilters({
  searchText,
  setSearchText,
  location,
  setLocation,
  priceRange,
  setPriceRange,
  priceType,
  setPriceType,
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
          <select
            className="w-full p-2 bg-white focus:outline-none px-4"
            value={location}
            onChange={(e) => setLocation(e.target.value as Location)}
          >
            <option value="All">All</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/5 flex flex-col space-y-1">
          <label className="text-xs">Price</label>
          <select
            className="w-full p-2 bg-white focus:outline-none px-4"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as PriceRange)}
          >
            <option value="All">All</option>
            {priceRanges.map((priceRange) => (
              <option key={priceRange} value={priceRange}>
                {priceRange}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[10%] flex flex-col space-y-1">
          <select
            className="w-full p-2 bg-white focus:outline-none px-4"
            value={priceType}
            onChange={(e) => setPriceType(e.target.value as PriceType)}
          >
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
            <option value="All">Free</option>
          </select>
        </div>
      </div>
    </section>
  );
}
