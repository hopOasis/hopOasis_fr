'use client';
import Link from 'next/link';
import './navLinks.scss';
import { routes } from '@/app/static/routes';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { LinkItem } from './types';
gsap.registerPlugin(ScrollToPlugin);

type CasesType = {
  about: string;
  delivery: string;
};
export function NavLinks() {
  const cases: CasesType = {
    about: '#anchor-about',
    delivery: '#anchor-footer',
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (!cases[target.id as keyof CasesType]) {
      return;
    }
    e.preventDefault();
    gsap.to(window, { scrollTo: cases[target.id as keyof CasesType] });
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

export const NavLinksFooter = () => {
  const preparedRoutes = routes.filter(
    ({ id }) => id === 'shop' || id === 'delivery',
  );

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

type Props = {
  title: string;
  links: LinkItem[];
};

export const LinksFooter: React.FC<Props> = ({ title, links }) => {
  return (
    <div>
      <h4 className="links-footer__title">{title}</h4>
      <ul className="links-footer__container">
        {links.map(({ id, name, href }) => (
          <Link className="links-footer__item" href={href} key={id}>
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
