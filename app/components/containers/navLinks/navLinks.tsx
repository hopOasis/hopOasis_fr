"use client";
import Link from "next/link";
import "./navLinks.scss";
import { routes } from "@/app/static/routes";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export function NavLinks() {
  const cases = {
    about: "#anchor-about",
    delivery: "#anchor-footer",
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (!cases[target.id]) {
      return;
    }
    e.preventDefault();
    gsap.to(window, { scrollTo: cases[target.id] });
  };

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
