import { Suspense } from 'react';
import Filters from '../components/containers/filters/Filters';
import Gallery from '../components/containers/gallery/gallery';
import Card from '../components/ui/card/Card';
import Section from '../components/ui/section/section';
import './shop.scss';
import { ProductsResponseType, ProxiEndpoints } from '../api/types';
import MainLayout from '../components/containers/MainLayout/MainLayout';
import BreadCrumbs from '../components/ui/BreadCrumbs/BreadCrumbs';
import Loader from '../components/ui/Loader/Loader';

export default async function Page() {
  // const products: ProductsResponseType = await getProducts({
  //   endpoint: Endpoints.beer,
  // });

  const resProducts = await fetch(ProxiEndpoints.beer);
  const products: ProductsResponseType = await resProducts.json();

  return (
    <MainLayout>
      <main className="shop-page">
        <Section>
          <BreadCrumbs />
          <Filters />
          <Suspense fallback={<Loader />}>
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
