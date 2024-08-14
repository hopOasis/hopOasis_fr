// import { getProducts } from '@/app/api/api';
import {
  // Endpoints,
  ProductsResponseType,
  ProxiEndpoints,
} from '@/app/api/types';
import Loader from '@/app/components/ui/Loader/Loader';
import Card from '@/app/components/ui/card/Card';
import Section from '@/app/components/ui/section/section';
import { CardSlider } from '@/app/components/ui/slider/CardSlider';
import { Suspense, memo } from 'react';

const SpecialForYouSection = memo(async () => {
  // const products: ProductsResponseType = await getProducts({
  //   endpoint: Endpoints.beer,
  // });

  const resProducts = await fetch(ProxiEndpoints.beer);
  const products: ProductsResponseType = await resProducts.json();

  return (
    <Section>
      <p className="title typography__h2">Спеціально для тебе</p>
      <Suspense fallback={<Loader />}>
        <CardSlider
          products={products.content.map((product) => (
            <swiper-slide key={product.id}>
              <Card {...product} />
            </swiper-slide>
          ))}
        />
      </Suspense>
    </Section>
  );
});

export default SpecialForYouSection;
