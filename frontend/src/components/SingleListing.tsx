import Image from "next/image";
import { useContext } from "react";

import { BsSave2 } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import { Listing } from "@/types/Listings";
import calculateTimeLeft from "@/lib/timeLeft";
import { PageContext } from "@/context/PageContext";
import { useRouter } from "next/router";
import { addToWishList, removeFromWishList } from "@/lib/wishList";

type SingleListingProp = {
  listing: Listing;
};

export default function SingleListing({ listing }: SingleListingProp) {
  const router = useRouter();
  let timeLeft = calculateTimeLeft(listing.createdAt, listing.timeLimit);
  const pageValue = useContext(PageContext);
  let dashboard = false;
  if (pageValue) {
    dashboard = pageValue.pageType === "dashboard";
  }

  return (
    <div className="flex flex-col space-y-2 w-[200px] shadow-md rounded-md">
      <Image
        src={listing.images[0]}
        alt={listing.title}
        width="200"
        height="200"
        className="rounded-t-md"
      />
      <p className="text-lg px-2">{listing.title}</p>
      <p className="text-md px-2">Price: NRs. {listing.price}</p>
      <p className="text-sm px-2">Time Left: {timeLeft}</p>
      {dashboard ? (
        <div
          className="flex flex-row space-x-2 bg-green-400 p-2 rounded-b-md px-2 justify-center items-center"
          onClick={() => router.push("/edit/" + listing.id)}
        >
          <button className="text-sm">Edit</button>
          <AiOutlineEdit className="text-md" />
        </div>
      ) : listing.onWishList ? (
        <div
          className="flex flex-row space-x-2 bg-green-400 p-2 rounded-b-md px-2 justify-center items-center"
          onClick={() => removeFromWishList(listing.id)}
        >
          <button className="text-sm">Remove From WishList</button>
          <BsSave2 className="text-md" />
        </div>
      ) : (
        <div
          className="flex flex-row space-x-2 bg-green-400 p-2 rounded-b-md px-2 justify-center items-center"
          onClick={() => addToWishList(listing.id)}
        >
          <button className="text-sm">Add To WishList</button>
          <BsSave2 className="text-md" />
        </div>
      )}
    </div>
  );
}
