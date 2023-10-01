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
    <header className=" px-8 py-4 w-full flex flex-row items-center justify-center border-b-gray-300 border-b-[1px]">
      <div className="max-w-[1200px] w-[90%] flex flex-row justify-between items-center">
        <Logo />
        <NavLinks authenticated={authenticated} />
      </div>
    </header>
  );
}
