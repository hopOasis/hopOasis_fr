import { Card } from '@/app/components/ui/card/Card';
import Loader from '@/app/components/ui/Loader/Loader';
import Section from '@/app/components/ui/section/section';
import { CardSlider } from '@/app/components/ui/slider/CardSlider';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { generateProducts } from '@/app/utils';
import { cookies } from 'next/headers';
import { Suspense, memo } from 'react';

const SpecialForYouSection = memo(async () => {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;
  const switchCartProxiApi = !cartId
    ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });
  const specialForYouProxiApi = fetch(ProxiEndpoints.specialForYou);

  const [resSpecialForYouProducts, resCart] = await Promise.all([specialForYouProxiApi, switchCartProxiApi]);

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
