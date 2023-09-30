import Link from "next/link";
import { useContext } from "react";

import { MdNotificationsNone } from "react-icons/md";

import { PageContext } from "@/context/PageContext";
import { PageType } from "@/types/pageType";

type NavLinksProps = {
  authenticated: boolean;
};

export default function NavLink({ authenticated }: NavLinksProps) {
  const pageValue = useContext(PageContext);
  let pageType: PageType = "index";
  if (pageValue) {
    pageType = pageValue.pageType;
  }
  return (
    <>
      {authenticated ? (
        <nav className="space-x-6 flex flex-row">
          <button className="flex flex-row items-center space-x-1">
            <MdNotificationsNone size={24} />
          </button>
          {pageType == "dashboard" ? (
            <Link href="/sell">
              <button className="flex flex-row items-center space-x-1 px-1 rounded-md border-red-500 border-[1px]">
                <span className="text-lg">Sell</span>
              </button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <button className="flex flex-row items-center space-x-1">
                <span className="text-lg">Dashboard</span>
              </button>
            </Link>
          )}
          {pageType != "saved" && (
            <Link href="/saved">
              <button className="flex flex-row items-center space-x-1">
                <span className="text-lg">Saved</span>
              </button>
            </Link>
          )}
          <Link href="/logout">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-lg">Logout</span>
            </button>
          </Link>
        </nav>
      ) : (
        <nav className="space-x-6 flex flex-row">
          <Link href="/login">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-lg">Login</span>
            </button>
          </Link>
          <Link href="/signup">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-lg">Signup</span>
            </button>
          </Link>
        </nav>
      )}
    </>
  );
}
