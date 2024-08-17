import Link from 'next/link';
import { routes } from '@/app/static/routes';
import { CardButton } from '../../buttons/buttons';
import { revalidate } from '@/app/actions';
import { ProxiEndpoints } from '@/app/api/types';
import { IDescriptionBlock } from '../types';
import { oazaStorage } from '@/app/utils';

export default function DescriptionBlock({ beerName, volumeLarge, priceLarge, id, isInCart }: IDescriptionBlock) {
  const onClick = async () => {
    let cartId = oazaStorage.getCartId();
    if (!cartId) {
      cartId = oazaStorage.generateAndSetCartId();
    }

    await fetch(`${ProxiEndpoints.cart}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, quantity: 1, cartId, itemType: 'BEER' }),
    });
    revalidate();
  };

  return (
    <div className="card__description-wrapper">
      <Link href={`${routes[2].href}/${id}`} className="card__name typography__h5">{`${beerName}`}</Link>
      <p>{volumeLarge}</p>
      <p className="card__price typography__h3 accent">{`${priceLarge} грн.`}</p>
      <CardButton id={id} isInCart={isInCart} onClick={onClick} />
    </div>
  );
}
