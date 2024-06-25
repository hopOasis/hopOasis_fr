import { routes } from "@/app/static/routes";
import MainLink from "../links/links";

export default function Total({ total }) {
  return (
    <div className="cart-modal__container  cart-list__total">
      <p className="cart-modal__title">Сума замовлення {total} грн.</p>
      <div>
        <MainLink href={routes[2].href} variant="light"> Продовжити покупки</MainLink>
        <MainLink href="#" variant="dark">
          Оформити замовлення
        </MainLink>
      </div>
    </div>
  );
}
