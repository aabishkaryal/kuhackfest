import { useRouter } from "next/router";

import { Listing } from "@/types/Listings";
import Carousel from "./Carousel";
import { placeOrder } from "@/lib/listing";

type ShowListingDetailsProps = {
  listing?: Listing;
};

export default function ShowListingDetails({
  listing,
}: ShowListingDetailsProps) {
  const router = useRouter();
  if (!listing)
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-2xl">404: No Listing Found</p>
      </div>
    );
  return (
    <div className="flex flex-row items-center justify-end space-x-4 mt-4 pb-4 border-b-2 border-dashed border-b-gray-800">
      <Carousel images={listing.images} />
      <div className="flex flex-col space-y-4 h-full">
        <p className="text-4xl">{listing.title}</p>
        <p className="text-lg">Price: NRs. {listing.price}</p>
        <p className="text-md mt-4"> {listing.description}</p>
        <button
          type="button"
          className="h-12 px-4 py-2 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={async () => {
            await placeOrder(listing.id).then(() => router.reload());
          }}
        >
          Place Bid
        </button>
      </div>
    </div>
  );
}
