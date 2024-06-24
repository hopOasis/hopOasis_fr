"use client";
import Link from "next/link";
import "./navLinks.scss";
import { filters } from "../../..//static/filters";
import { routes } from "../../../static/routes";
import { usePathname } from "next/navigation";
import { contacts } from "@/app/static/contacts";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="navigation">
      {routes.slice(1, 4).map(({ name, href, id }) => (
        <li className="navigation__item" key={id}>
          <Link
            className={href === pathname ? "active" : undefined}
            href={href}
            id={id}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const ContactsBlock = () => {
  return (
    <ul className="footer__contacts">
      {contacts.map((el, idx) => (
        <li key={idx}>
          <Link href={`tel:${el}`}>{el}</Link>
        </li>
      ))}
    </ul>
  );
};

export const LinksFooter = () => {
  return (
    <ul>
      {filters.slice(1).map(({ id, name }) => (
        <li key={id}>
          <Link
            href={{
              pathname: routes[2].href,
              query: {
                filter: id,
              },
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
