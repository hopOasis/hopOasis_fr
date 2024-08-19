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
import {  ProxiEndpoints } from '../static/constants';
import { generateProducts } from '../utils';
import { fetchCartUtils } from '../utils/serverUtils';

export default async function Page({ searchParams: { filter } }: IProps) {
  const switchCartProxiApi = await fetchCartUtils();
  const productsProxiApi = () =>
    fetch(ProxiEndpoints.products, {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ filter }),
    });

  const [resProducts, resCart] = await Promise.all([productsProxiApi(), switchCartProxiApi()]);

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
