import Listings from "./Listings";
import SearchFilters from "./SearchFilters";

type BodyProps = {};

export default function Body({}: BodyProps) {
  return (
    <main className="">
      <SearchFilters />
      <Listings />
    </main>
  );
}
