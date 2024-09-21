import Link from 'next/link';
import { routes } from '@/app/static/routes';
import { CardButton } from '../../buttons/buttons';
import { revalidate } from '@/app/actions';
import { ProxiEndpoints } from '@/app/static/constants';
import { GeneratedProductType } from '@/app/types/products';
import { useState } from 'react';
import VolumeTabs from '@/app/components/containers/VolumeTabs/VolumeTabs';

export default function DescriptionBlock({
  id,
  volumeLarge,
  volumeSmall,
  priceLarge,
  isInCart,
  name,
  itemType,
}: GeneratedProductType) {
  const [active, setActive] = useState<number>(1);

  const onClick = async () => {
    await fetch(ProxiEndpoints.carts, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId: id, quantity: 1, itemType }),
    });

    revalidate();
  };

  return (
    <div className="card__description-wrapper">
      <Link
        href={{
          pathname: `${routes[2].href.pathname}/${id}`,
        }}
        className="card__name typography__h5"
      >{`${name}`}</Link>
      <VolumeTabs
        volumeLarge={volumeLarge}
        volumeSmall={volumeSmall}
        itemType={itemType}
        onClick={(value: number) => setActive(value)}
        active={active}
      />
      <p className="card__price typography__h3 accent">{`${priceLarge} грн.`}</p>
      <CardButton id={id} isInCart={isInCart} onClick={onClick} />
    </div>
  );
}
