"use client";
import Link from "next/link";
import "./navLinks.scss";
import { routes } from "@/app/static/routes";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { filters } from "@/app/static/filters";
gsap.registerPlugin(ScrollToPlugin);

type CasesType = {
  about: string;
  delivery: string;
};

const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const target = e.target as HTMLAnchorElement;
  const cases: CasesType = {
    about: "#anchor-about",
    delivery: "#anchor-footer",
  };
  if (!cases[target.id as keyof CasesType]) {
    return;
  }
  e.preventDefault();
  gsap.to(window, { scrollTo: cases[target.id as keyof CasesType] });
};

export function NavLinks() {
  return (
    <ul className="navigation">
      {routes.slice(1, 4).map(({ name, href, id }) => (
        <li className="navigation__item" key={id}>
          <Link href={href} onClick={onClick} id={id}>
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
          <Link href={href} id={id} onClick={onClick}>
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
      {filters.map(({ id, name, href }) => (
        <Link className="links-footer__item" href={href} key={id}>
          {name}
        </Link>
      ))}
    </ul>
  );
};
