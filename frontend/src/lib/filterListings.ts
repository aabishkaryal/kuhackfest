import { Listing } from "@/types/Listings";
import { Filter } from "@/types/filter";

export function filterListings(
  listings: Listing[],
  filters: Filter | undefined
): Listing[] {
  if (!filters) return listings.slice(0);

  const filteredListings: Listing[] = [];
  for (const listing of listings) {
    if (
      filters.searchQuery != "" &&
      !listing.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
      continue;

    if (
      filters.priceType != "All" &&
      ((filters.priceType == "Free" && listing.price != 0) ||
        (filters.priceType == "Paid" && listing.price > 0))
    )
      continue;

    if (
      filters.category &&
      filters.category != "All" &&
      filters.category != listing.category
    )
      continue;

    if (
      filters.location &&
      filters.location != "All" &&
      filters.location != listing.location
    )
      continue;

    if (
      filters.priceRange &&
      filters.priceRange != "All" &&
      ((filters.priceRange == "0 - 1,000" && listing.price > 1_000) ||
        (filters.priceRange == "1,000 - 5,000" &&
          listing.price >= 5_000 &&
          listing.price < 1_000) ||
        (filters.priceRange == "5,000 - 10,000" &&
          listing.price >= 10_000 &&
          listing.price < 5_000) ||
        (filters.priceRange == "10,000 - 50,000" &&
          listing.price >= 50_000 &&
          listing.price < 10_000) ||
        (filters.priceRange == "50,000+" && listing.price < 50_000))
    )
      continue;

    filteredListings.push(listing);
  }
  return filteredListings;
}
