import { LogoLink } from "../../ui/links/links";
import Address from "./Address";
import FooterFilters from "./FooterFilters";
import Contacts from "./Contacts";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer dark typography__h6 t-w-500">
      <div className="footer__container container">
        <LogoLink />
        <Contacts />
        <Address />
        <FooterFilters />
      </div>
    </footer>
  );
}
