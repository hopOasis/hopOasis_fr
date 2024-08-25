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
import { generateProducts } from '../utils';
import { fetchCartUtils, fetchProductsUtils } from '../utils/serverUtils';
import NoItems from '../components/ui/NoItems/NoItems';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hope Oasis | Магазин',
  description:
    'Ознайомтеся з нашим асортиментом крафтового пива та закусок в інтернет-магазині. Вибирайте улюблені сорти пива та замовляйте зручно онлайн з доставкою по Україні.',
  keywords: [
    'крафтове пиво',
    'купити пиво онлайн',
    'замовити пиво з доставкою',
    'інтернет-магазин пива',
    'крафтовий магазин',
    'доставка пива',
    'пивні закуски',
    'унікальні сорти пива',
    'пивні набори',
    'кращі сорти пива',
  ],
};

export default async function Page({ searchParams: { filter = null } }: IProps) {
  const switchCartProxiApi = fetchCartUtils();
  const productsProxiApi = fetchProductsUtils({ filter });

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
            {!products.content.length ? (
              <NoItems />
            ) : (
              <Gallery>
                {products.content.map((product) => (
                  <Card {...product} key={product.id} />
                ))}
              </Gallery>
            )}
          </Suspense>
        </Section>
      </main>
    </MainLayout>
  );
}
