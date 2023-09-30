import "@/styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { useState } from "react";

import ContextProvider from "@/components/ContextProvider";
import { User } from "@/types/user";
import { PageType } from "@/types/pageType";
import fetchUser from "@/lib/fetchUser";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | undefined>(fetchUser);
  const [pageType, setPageType] = useState<PageType>("index");
  return (
    <ContextProvider
      user={user}
      setUser={(v) => setUser(v)}
      pageType={pageType}
      setPageType={setPageType}
    >
      <Head>
        <title>Second Life</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
