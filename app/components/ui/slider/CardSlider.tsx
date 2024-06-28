import { IProductCard } from '@/app/types/types';
import React, { Suspense, useEffect, useRef } from 'react';
import Card from '../card/Card';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './cardslider.scss';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

type Props = {
  products: IProductCard[];
  slidesPerView?: number;
};

export const CardSlider: React.FC<Props> = ({
  products,
  slidesPerView = 4,
}) => {
  const swiperElRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    register();
    if (swiperElRef.current) {
      const params: SwiperOptions = {
        spaceBetween: 24,
        speed: 1000,
      };

      Object.assign(swiperElRef.current, params);
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <swiper-container
      slides-per-view={slidesPerView}
      style={{ zIndex: 0 }}
      init={false}
      navigation={true}
      ref={swiperElRef}
    >
      {products.map((product) => (
        <swiper-slide style={{ padding: '20px' }} key={product.id}>
          <Card {...product} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
