import { routes } from "@/app/static/routes";
import MainLink from "../links/links";
import Link from "next/link";

export default function Total({ total }) {
  return (
    <div className="cart-modal__container  cart-list__total">
      <p className="cart-modal__title">Сума замовлення {total} грн.</p>
      <div>
        <Link href={routes[2].href} className="cont-shopping-link typography__h5">
          Продовжити покупки
        </Link>
        <MainLink href={routes[4].href} variant="dark">
          Оформити замовлення
        </MainLink>
      </div>
    </div>
  );
}
