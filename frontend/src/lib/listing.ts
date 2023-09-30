import { CreateListingInput, Listing, exampleListings } from "@/types/Listings";

export async function createListing(listing: CreateListingInput) {}

export async function fetchListing(id: string): Promise<Listing> {
  return {} as Listing;
}

export async function fetchAllListings(): Promise<Listing[]> {
  return exampleListings;
}

export async function placeOrder(id: string) {}
