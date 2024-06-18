import { shops } from "@/app/static/footer-links";
import Link from "next/link";

export default function Address() {
  return (
    <div>
      <h4 className="links-footer__title">Магазини</h4>
      <address>
        <ul className="links-footer__container">
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
