import { useContext } from "react";

import { UserContext } from "@/context/UserContext";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const userValue = useContext(UserContext);
  let authenticated = false;
  if (userValue) {
    authenticated = userValue.user !== undefined;
  }

  return (
    <header className="flex flex-row justify-between items-center px-8 py-4 w-full border-b-gray-300 border-b-[1px]">
      <Logo />
      <NavLinks authenticated={authenticated} />
    </header>
  );
}
