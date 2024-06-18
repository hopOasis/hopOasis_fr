import Link from 'next/link';
import './footer.scss';
import { goods, shops } from '@/app/static/footer-links';
import { routes } from '@/app/static/routes';
import Image from 'next/image';
import { LinksFooter, NavLinksFooter } from '../navLinks/navLinks';

export default function Footer() {
  return (
    <footer className="footer" id="anchor-footer">
      <div className="footer__container container">
        <Link href={routes[0].href}>
          <Image
            src={'./logo_2.svg'}
            alt={'logo Khmilna oaza'}
            width={189}
            height={62}
          />
        </Link>
        <NavLinksFooter />
        <LinksFooter title={'Магазини'} links={shops} />
        <LinksFooter title={'Розділи'} links={goods} />
      </div>
    </footer>
  );
}
