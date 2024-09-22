'use client';
import Rating from '@/app/components/ui/Rating/Rating';
import { CardButton } from '@/app/components/ui/buttons/buttons';
import Icons from '@/app/components/ui/icons/icons';
import Section from '@/app/components/ui/section/section';
import Image from 'next/image';
import { revalidateProductPage } from '@/app/actions';
import { ProxiEndpoints } from '@/app/static/constants';
import { IHeroSection } from '../types';
import { separateFilter } from '@/app/utils';
import VolumeTabs from '@/app/components/containers/VolumeTabs/VolumeTabs';
import { useState } from 'react';

export default function HeroSection({
  id,
  name,
  image,
  priceLarge,
  priceSmall,
  isInCart,
  rating,
  votes,
  itemType,
  volumeLarge,
  volumeSmall,
  isAllreadyVoted,
}: IHeroSection) {
  const [active, setActive] = useState<number>(1);

  const addRating = async (value: number) => {
    await fetch(`${ProxiEndpoints[separateFilter(id)]}/${id}/rating`, {
      method: 'POST',
      body: JSON.stringify({ ratingValue: value }),
    });
    revalidateProductPage(id);
  };

  return (
    <Section>
      <Image src={image[0]} alt={name} width={628} height={431} />
      <div className="single-page__description-block ">
        <h1 className="title typography__h2">{name}</h1>
        <p className="title typography__h2 accent">{active === 1 ? priceLarge : priceSmall} грн.</p>
        <VolumeTabs
          active={active}
          itemType={itemType}
          onClick={(value) => setActive(value)}
          volumeLarge={volumeLarge}
          volumeSmall={volumeSmall}
        />

        {!isAllreadyVoted ? (
          <div className="single-page__rating-block">
            <Rating rating={rating} onChange={addRating} />
            <span className="typography__h6 t-b-100">{votes}</span>
          </div>
        ) : (
          <p>Ви вже оцінили цей товар.</p>
        )}

        <CardButton
          id={id}
          onClick={() => {
            console.log('fetch api');
          }}
          isInCart={isInCart}
        />
        <button
          className="single-page__fav-button typography__h5"
          type="button"
          onClick={() => console.log('button-id', id)}
        >
          <Icons name="heart" /> Додати до обраного
        </button>
      </div>
    </Section>
  );
}
