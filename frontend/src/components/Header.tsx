import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const authValue = useContext(AuthContext);
  let authenticated = false;
  if (authValue) {
    authenticated = authValue.authenticated;
  }

  return (
    <header className="flex flex-row justify-between px-4 py-4">
      <Logo />
      <NavLinks authenticated={authenticated} />
    </header>
  );
}
