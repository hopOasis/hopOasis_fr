import Section from '../../ui/section/section';
import './weakProducts.scss';
import { memo, Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import { CardSlider } from '../../ui/slider/CardSlider';
import { ProductsResponseType } from '@/app/api/types';
import { Card } from '../../ui/card/Card';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { cookies } from 'next/headers';
import { generateProducts } from '@/app/utils';

const WeakProducts = memo(async () => {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;

  const weekProductsProxiApi = fetch(ProxiEndpoints.weekProducts, { cache: 'no-store', method: 'GET' });
  const switchCartProxiApi = !cartId
    ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });

  const [resWeekProducts, resCart] = await Promise.all([weekProductsProxiApi, switchCartProxiApi]);

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

export default WeakProducts;
