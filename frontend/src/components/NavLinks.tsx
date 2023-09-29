import Link from "next/link";

import { NavLink } from "@/types/NavLInk";

type NavLinksProps = {
  authenticated: boolean;
};

const links: NavLink[] = [
  { name: "Home", href: "/", authenticated: false },
  { name: "About", href: "/about", authenticated: false },
  { name: "Contact", href: "/contact", authenticated: false },
  { name: "Dashboard", href: "/dashboard", authenticated: true },
];

export default function NavLink({ authenticated }: NavLinksProps) {
  return (
    <nav>
      <ul className="flex flex-row space-x-3">
        {links.map((link) => {
          if (link.authenticated && !authenticated) {
            return null;
          }
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
