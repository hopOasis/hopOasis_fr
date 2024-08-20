import Footer from '../footer/footer';
import { Header } from '../header/Header';
import { IProps } from './types';
import { Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import CartModal from '../../ui/modals/cartModal/CartModal';
import { generateProducts } from '@/app/utils';
import { ApiEndpoints, ProxiEndpoints } from '@/app/static/constants';
import { fetchCartUtils } from '@/app/utils/serverUtils';

export default async function MainLayout({ children }: IProps) {
  const weekProductsProxiApi = () => fetch(ProxiEndpoints.specialForYou, { method: 'GET', });
  const switchCartProxiApi = await fetchCartUtils();

  const [resWeekProducts, resCart] = await Promise.all([weekProductsProxiApi(), switchCartProxiApi()]);

  const unpreparedProducts = await resWeekProducts.json();
  const cart = await resCart.json();

  const products = generateProducts({
    products: unpreparedProducts,
    cart,
  });

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Suspense fallback={<Loader />}>
        <CartModal cart={cart} products={products.content} />
      </Suspense>
    </>
  );
}
