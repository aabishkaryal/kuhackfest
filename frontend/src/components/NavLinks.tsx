import Link from "next/link";

import { BiLogOut, BiSolidDashboard, BiLogIn } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";

type NavLinksProps = {
  authenticated: boolean;
};

export default function NavLink({ authenticated }: NavLinksProps) {
  return (
    <>
      {authenticated ? (
        <nav className="space-x-4 flex flex-row">
          <Link href="/notifications">
            <button className="flex flex-row items-center space-x-1">
              <MdNotifications className="text-xl" />
              <span className="text-xl">Notifications</span>
            </button>
          </Link>
          <Link href="/logout">
            <button className="flex flex-row items-center space-x-1">
              <BiLogOut className="text-xl" />
              <span className="text-xl">Logout</span>
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="flex flex-row items-center space-x-1">
              <BiSolidDashboard className="text-xl" />
              <span className="text-xl">Dashboard</span>
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="flex flex-row items-center space-x-1">
              <BiSolidDashboard className="text-xl" />
              <span className="text-xl">Saved</span>
            </button>
          </Link>
        </nav>
      ) : (
        <nav className="space-x-4 flex flex-row">
          <Link href="/login">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-xl">Login</span>
              <BiLogIn className="text-xl" />
            </button>
          </Link>
          <Link href="/signup">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-xl">Signup</span>
              <BiLogIn className="text-xl" />
            </button>
          </Link>
        </nav>
      )}
    </>
  );
}
