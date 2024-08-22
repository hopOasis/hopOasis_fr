import Section from '../../ui/section/section';
import './weakProducts.scss';
import { memo, Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import { CardSlider } from '../../ui/slider/CardSlider';
import { Card } from '../../ui/card/Card';
import { ApiEndpoints, ProxiEndpoints } from '@/app/static/constants';
import { generateProducts } from '@/app/utils';
import { fetchCartUtils } from '@/app/utils/serverUtils';
import NoItems from '../../ui/NoItems/NoItems';

const WeakProducts = memo(async () => {
  const weekProductsProxiApi = () => fetch(ProxiEndpoints.weekProducts, { method: 'GET'});
  const switchCartProxiApi = fetchCartUtils();

  const [resWeekProducts, resCart] = await Promise.all([weekProductsProxiApi(), switchCartProxiApi()]);

  const unpreparedProducts = await resWeekProducts.json();
  const cart = await resCart.json();

  const products = generateProducts({
    products: unpreparedProducts,
    cart,
  });

  return (
    <Section>
      <p className="title typography__h2">Товари тижня</p>
      <Suspense fallback={<Loader />}>
        {!products.content.length ? (
          <NoItems />
        ) : (
          <CardSlider
            products={products.content.map((product) => (
              <swiper-slide key={product.id}>
                <Card {...product} />
              </swiper-slide>
            ))}
          />
        )}
      </Suspense>
    </Section>
  );
});

export default WeakProducts;
