import { Card } from '@/app/components/ui/card/Card';
import Loader from '@/app/components/ui/Loader/Loader';
import Section from '@/app/components/ui/section/section';
import { CardSlider } from '@/app/components/ui/slider/CardSlider';
import {  ApiEndpoints } from '@/app/static/constants';
import { generateProducts } from '@/app/utils';
import { fetchCartUtils } from '@/app/utils/serverUtils';
import { Suspense, memo } from 'react';

const SpecialForYouSection = memo(async () => {
  const specialForYouProxiApi = () => fetch(ApiEndpoints.specialForYou);
  const switchCartProxiApi =  fetchCartUtils();

  const [resSpecialForYouProducts, resCart] = await Promise.all([specialForYouProxiApi(), switchCartProxiApi()]);

  const unpreparedProducts = await resSpecialForYouProducts.json();
  const cart = await resCart.json();

  const products = generateProducts({
    products: unpreparedProducts,
    cart,
  });

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
