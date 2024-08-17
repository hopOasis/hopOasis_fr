import { Suspense } from 'react';
import Filters from '../components/containers/filters/Filters';
import Gallery from '../components/containers/gallery/gallery';
import Section from '../components/ui/section/section';
import './shop.scss';
import MainLayout from '../components/containers/MainLayout/MainLayout';
import BreadCrumbs from '../components/ui/BreadCrumbs/BreadCrumbs';
import Loader from '../components/ui/Loader/Loader';
import { ProductsResponseType, ProxiEndpoints } from '../api/types';
import { Card } from '../components/ui/card/Card';
import { IProps } from './types';

export default async function Page({ searchParams: { filter } }: IProps) {
  const resProducts = await fetch(ProxiEndpoints.products, {
    method: 'POST',
    cache: 'no-store',
    body: JSON.stringify({ filter }),
  });
  const resCart = await fetch(ProxiEndpoints.cart)
  const products: ProductsResponseType = await resProducts.json();
  const cart = await resCart.json();


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
