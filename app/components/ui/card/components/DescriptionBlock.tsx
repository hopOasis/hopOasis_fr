import Link from 'next/link';
import { routes } from '@/app/static/routes';
import { CardButton } from '../../buttons/buttons';
import { revalidate } from '@/app/actions';
import { IDescriptionBlock } from '../types';
import { ProxiEndpoints } from '@/app/static/constants';

export default function DescriptionBlock({ beerName, volumeLarge, priceLarge, id, isInCart }: IDescriptionBlock) {
  const onClick = async () => {

    await fetch(ProxiEndpoints.cart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId: id, quantity: 1, itemType: 'BEER' }),
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
