import Link from "next/link";
import "./navLinks.scss";
import { routes } from "@/app/static/routes";

export function NavLinks() {
  return (
    <ul className="navigation">
      {routes.slice(1, 4).map(({ name, href }) => (
        <li className="navigation__item" key={name}>
          <Link href={href}> {name} </Link>
        </li>
      ))}
    </ul>
  );
}
