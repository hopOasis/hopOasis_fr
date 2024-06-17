import Image from "next/image";
import "./header.scss";
import Link from "next/link";
import { routes } from "@/app/static/routes";
import NavIcons from "../navIcons/navIcons";
import { NavLinks } from "../navLinks/navLinks";

export function Header() {
  return (
    <header className="dark">
      <nav className="container nav-block">
        <Link href={routes[0].href}>
          <Image
            src={"./logo_2.svg"}
            alt={"logo Khmilna oaza"}
            width={189}
            height={62}
          />
        </Link>
        <NavLinks />
        <NavIcons />
      </nav>
    </header>
  );
}
