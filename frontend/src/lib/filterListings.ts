import { Listing } from "@/types/Listings";
import { Filter } from "@/types/filter";

export function filterListings(
  listings: Listing[],
  filters: Filter | undefined
): Listing[] {
  return listings;
}
