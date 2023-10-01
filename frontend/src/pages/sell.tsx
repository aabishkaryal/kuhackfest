import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { UserContext } from "@/context/UserContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContext } from "@/context/PageContext";
import ListingForm from "@/components/ListingForm";

export default function Dashboard() {
  const router = useRouter();
  const pageState = useContext(PageContext);
  if (pageState && pageState.pageType != "sell") pageState.setPageType("sell");
  const userState = useContext(UserContext);
  useEffect(() => {
    if (!userState?.user) router.push("/");
  });
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <ListingForm />
      <Footer />
    </div>
  );
}
