'use client';
import Rating from '@/app/components/ui/Rating/Rating';
import { CardButton } from '@/app/components/ui/buttons/buttons';
import Icons from '@/app/components/ui/icons/icons';
import Section from '@/app/components/ui/section/section';
import Image from 'next/image';
import { revalidateProductPage } from '@/app/actions';
import { ProxiEndpoints } from '@/app/static/constants';
import { IHeroSection } from '../types';

export default function HeroSection({ id, name, image, priceLarge, isInCart, rating }: IHeroSection) {
  return (
    <Section>
      <Image src={image[0]} alt={name} width={628} height={431} />
      <div className="single-page__description-block ">
        <h1 className="title typography__h2">{name}</h1>
        <p className="title typography__h2 accent">{priceLarge} грн.</p>
        <Rating
          rating={rating}
          onChange={async (value) => {
            await fetch(ProxiEndpoints.ratings, {
              method: 'POST',
              body: JSON.stringify({ id, value }),
            });
            revalidateProductPage(id.toString());
          }}
        />
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
