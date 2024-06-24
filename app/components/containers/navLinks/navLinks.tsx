"use client";
import Link from "next/link";
import "./navLinks.scss";
import { filters } from "../../..//static/filters";
import { routes } from "../../../static/routes";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
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

export const FooterNavLinks = () => {
  const preparedRoutes = [routes[2], routes[3]];
  return (
    <ul className="footer-navigation">
      {preparedRoutes.map(({ name, href, id }) => (
        <li className="footer-navigation__item" key={id}>
          <Link href={href} id={id}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const LinksFooter = () => {
  return (
    <ul className="links-footer__container">
      {filters.map(({ id, name }) => (
        <Link
          className="links-footer__item"
          href={{
            pathname: routes[2].href,
            query: {
              filter: id,
            },
          }}
          key={id}
        >
          {name}
        </Link>
      ))}
    </ul>
  );
};
