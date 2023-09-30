import Link from "next/link";

import { BiLogOut, BiSolidDashboard, BiLogIn } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

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
              <MdNotifications className="text-lg" />
              <span className="text-lg">Notifications</span>
            </button>
          </Link>
          <Link href="/logout">
            <button className="flex flex-row items-center space-x-1">
              <BiLogOut className="text-lg" />
              <span className="text-lg">Logout</span>
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="flex flex-row items-center space-x-1">
              <BiSolidDashboard className="text-lg" />
              <span className="text-lg">Dashboard</span>
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="flex flex-row items-center space-x-1">
              <CiSaveDown2 className="text-lg" />
              <span className="text-lg">Saved</span>
            </button>
          </Link>
        </nav>
      ) : (
        <nav className="space-x-4 flex flex-row">
          <Link href="/login">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-lg">Login</span>
              <BiLogIn className="text-lg" />
            </button>
          </Link>
          <Link href="/signup">
            <button className="flex flex-row items-center space-x-1">
              <span className="text-lg">Signup</span>
              <BiLogIn className="text-lg" />
            </button>
          </Link>
        </nav>
      )}
    </>
  );
}
