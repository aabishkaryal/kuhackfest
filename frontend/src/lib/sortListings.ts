import { Listing } from "@/types/Listings";
import { sortOption } from "@/types/sort";
import { calculateTimeLeft, calculateTimeLeftInMs } from "./timeLeft";

export function sortListings(
  listings: Listing[],
  sortOption: sortOption
): Listing[] {
  if (sortOption == "Lowest Price")
    return listings.sort((a, b) => a.price - b.price);
  if (sortOption == "Highest Price")
    return listings.sort((a, b) => b.price - a.price);
  if (sortOption == "Most Time Left")
    return listings.sort(
      (a, b) =>
        calculateTimeLeftInMs(a.createdAt, a.timeLimit) -
        calculateTimeLeftInMs(b.createdAt, b.timeLimit)
    );
  if (sortOption == "Least Time Left")
    return listings.sort(
      (a, b) =>
        calculateTimeLeftInMs(b.createdAt, b.timeLimit) -
        calculateTimeLeftInMs(a.createdAt, a.timeLimit)
    );
  return listings;
}
