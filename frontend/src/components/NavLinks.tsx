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
    <div className="">
      {authenticated ? (
        <nav className="space-x-6 flex flex-row">
          <button className="flex flex-row items-center space-x-1">
            <MdNotificationsNone size={24} />
          </button>
          {pageType == "dashboard" ? (
            <Link href="/sell">
              <button className="flex flex-row items-center space-x-1 px-1 rounded-md border-red-500 border-[1px]">
                <span className="text-xl">Sell</span>
              </button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <button className="flex flex-row items-center space-x-1 bg-[#6c1cde] text-white px-2 rounded-sm">
                <span className="text-xl">Dashboard</span>
              </button>
            </Link>
          )}
          {pageType != "saved" && (
            <Link href="/saved">
              <button className="flex flex-row items-center space-x-1">
                <span className="text-xl">Saved</span>
              </button>
            </Link>
          )}
          <Link href="/logout">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-xl">Logout</span>
            </button>
          </Link>
        </nav>
      ) : (
        <nav className="space-x-6 flex flex-row">
          <Link href="/login">
            <button className="flex flex-row items-center space-x-1 bg-[#6c1cde] text-white px-2 rounded-sm">
              <span className="text-xl">Login</span>
            </button>
          </Link>
          <Link href="/signup">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-xl">Signup</span>
            </button>
          </Link>
        </nav>
      )}
    </div>
  );
}
// 6c1cde
