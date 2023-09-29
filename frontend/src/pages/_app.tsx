import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useState } from "react";

import ContextProvider from "@/components/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <ContextProvider
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    >
      <Component {...pageProps} />
    </ContextProvider>
  );
}
