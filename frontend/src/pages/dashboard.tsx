import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/context/AuthContext";

export default function Dashboard() {
  const router = useRouter();
  const authenticatedState = useContext(AuthContext);
  useEffect(() => {
    if (!authenticatedState?.authenticated) router.push("/");
  });
  return <>Dashboard</>;
}
