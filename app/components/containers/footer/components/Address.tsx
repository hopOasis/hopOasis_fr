import { shops } from "@/app/static/footer-links";
import Link from "next/link";

export default function Address() {
  return (
    <div className="footer-address">
      <h4 className="footer__title typography__h3">Магазини</h4>
      <address>
        <ul >
          {shops.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                className="links-footer__item"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </address>
    </div>
  );
}
