import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useState } from "react";

import ContextProvider from "@/components/ContextProvider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <ContextProvider
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    >
      <Head>
        <title>Second Life</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
