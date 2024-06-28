import "./header.scss";
import NavIcons from "../navIcons/navIcons";
import { NavLinks } from "../navLinks/navLinks";
import { LogoLink } from "../../ui/links/links";

export function Header() {
  return (
    <header className="dark">
      <nav className="container nav-block">
        <LogoLink />
        <NavLinks />
        <NavIcons />
      </nav>
    </header>
  );
}
