import { Suspense } from 'react';
import Filters from '../components/containers/filters/Filters';
import Gallery from '../components/containers/gallery/gallery';
import Section from '../components/ui/section/section';
import './shop.scss';
import MainLayout from '../components/containers/MainLayout/MainLayout';
import BreadCrumbs from '../components/ui/BreadCrumbs/BreadCrumbs';
import Loader from '../components/ui/Loader/Loader';
import { Card } from '../components/ui/card/Card';
import { IProps } from './types';
import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '../static/constants';
import { generateProducts } from '../utils';

export default async function Page({ searchParams: { filter } }: IProps) {

    const cookieStore = cookies();
    const oazaCookie = cookieStore.get(oaza_guest);

    const cartId = !oazaCookie ? false : oazaCookie.value;

    const productsProxiApi =  fetch(ProxiEndpoints.products, {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ filter }),
    });
    const switchCartProxiApi = !cartId
      ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
      : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });

    const [resProducts, resCart] = await Promise.all([productsProxiApi, switchCartProxiApi]);

    const unpreparedProducts = await resProducts.json();
    const cart = await resCart.json();

    const products = generateProducts({
      products: unpreparedProducts,
      cart,
    });


  return (
    <MainLayout>
      <main className="shop-page">
        <Section>
          <BreadCrumbs />
          <Suspense fallback={<Loader />}>
            <Filters />
            <Gallery>
              {products.content.map((product) => (
                <Card {...product} key={product.id} />
              ))}
            </Gallery>
          </Suspense>
        </Section>
      </main>
    </MainLayout>
  );
}
