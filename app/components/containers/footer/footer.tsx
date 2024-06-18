import './footer.scss';
import {  FooterNavLinks } from '../navLinks/navLinks';
import { LogoLink } from '../../ui/links/links';
import Address from './Address';
import FooterFilters from './FooterFilters';

export default function Footer() {
  return (
    <footer className="footer" id="anchor-footer">
      <div className="footer__container container">
        <LogoLink />
        <FooterNavLinks />
        <Address />
        <FooterFilters />
      </div>
    </footer>
  );
}
