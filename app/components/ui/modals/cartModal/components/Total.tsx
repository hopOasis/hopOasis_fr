'use client';
import { routes } from '@/app/static/routes';
import MainLink from '../../../links/links';
import { Palitra } from '@/app/types/types';

export default function Total({ total }: { total: number }) {
  return (
    <div className="cart-modal__container cart-list__total">
      <p className="cart-modal__title typography__h3">Сума замовлення {total} грн.</p>
      <div>
        <MainLink href={routes[2].href} variant={Palitra.white}>
          Продовжити покупки
        </MainLink>
        <MainLink href={routes[4].href}>Оформити замовлення</MainLink>
      </div>
    </div>
  );
}
