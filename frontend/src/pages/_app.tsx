"use client";
import "@/styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import ContextProvider from "@/components/ContextProvider";
import { User } from "@/types/user";
import { PageType } from "@/types/pageType";
import fetchUser from "@/lib/auth";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [pageType, setPageType] = useState<PageType>("index");

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  });

  return (
    <ContextProvider
      user={user}
      setUser={(v) => setUser(v)}
      pageType={pageType}
      setPageType={setPageType}
    >
      <Head>
        <title>Bech Dim</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
