import type { Dispatch, SetStateAction } from "react";
type SearchFilterProps = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
};

export default function SearchFilters({
  searchText,
  setSearchText,
}: SearchFilterProps) {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
