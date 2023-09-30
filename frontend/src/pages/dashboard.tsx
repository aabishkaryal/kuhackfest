import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/context/AuthContext";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const router = useRouter();
  const authenticatedState = useContext(AuthContext);
  useEffect(() => {
    if (!authenticatedState?.authenticated) router.push("/");
  });
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Body dashboard={true} />
      <Footer />
    </div>
  );
}
