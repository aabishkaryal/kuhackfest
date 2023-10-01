import { BACKEND_URL } from "@/constants/url";
import { CreateListingInput, Listing, exampleListings } from "@/types/Listings";

export async function createListing(listing: CreateListingInput) {
  const res = await fetch(`${BACKEND_URL}/api/listings`, {
    method: "POST",
    body: JSON.stringify(listing),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) return;
  throw new Error("Failed to create listing");
}

export async function fetchListing(id: string): Promise<Listing> {
  const res = await fetch(`${BACKEND_URL}/api/listings/${id}`);
  if (res.status === 200) return (await res.json()) as Listing;
  throw new Error("Failed to fetch listing");
}

export async function fetchAllListings(): Promise<Listing[]> {
  const res = await fetch(`${BACKEND_URL}/api/listings`);
  if (res.status === 200) return (await res.json()) as Listing[];
  throw new Error("Failed to fetch listings");
}

export async function placeOrder(id: string) {}
