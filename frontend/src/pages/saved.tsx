import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { UserContext } from "@/context/UserContext";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { PageContext } from "@/context/PageContext";

export default function Dashboard() {
  const router = useRouter();
  const pageState = useContext(PageContext);
  pageState?.setPageType("saved");
  const userState = useContext(UserContext);
  useEffect(() => {
    if (!userState?.user) router.push("/");
  });
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
