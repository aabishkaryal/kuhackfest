import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { useContext, useEffect } from "react";
import { PageContext } from "@/context/PageContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pageState = useContext(PageContext);
  if (pageState && pageState.pageType != "sell") pageState.setPageType("index");

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
