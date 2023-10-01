import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShowListings from "@/components/ShowListings";
import { PageContext } from "@/context/PageContext";
import { fetchAllListings } from "@/lib/listing";
import { Listing } from "@/types/Listings";
import ShowListingDetails from "@/components/ShowListingDetail";

export default function ShowListing() {
  const router = useRouter();
  const id = router.query.id;
  const pageState = useContext(PageContext);
  if (pageState && pageState.pageType != "sell") pageState.setPageType("index");

  const [listings, setListings] = useState<Listing[]>([]);
  useEffect(() => {
    fetchAllListings().then((listings) => setListings(listings));
  }, []);

  const listing = useMemo(
    () => listings.find((listing) => listing.id == id),
    [listings, id]
  );
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <main className="flex flex-col items-center w-[90%] w-max-[1200px]">
        <ShowListingDetails listing={listing} />
        <ShowListings listings={listings} />
      </main>
      <Footer />
    </div>
  );
}
