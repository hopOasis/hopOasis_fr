import { CartResponseType, ProductsResponseType } from '@/app/api/types';
import Footer from '../footer/footer';
import { Header } from '../header/Header';
import { IProps } from './types';
import { Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import CartModal from '../../ui/modals/cartModal/CartModal';
import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { generateProducts } from '@/app/utils';

export default async function MainLayout({ children }: IProps) {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;

  const specialForYouProxiApi = fetch(ProxiEndpoints.beer, { cache: 'no-store', method: 'GET' });
  const switchCartProxiApi = !cartId
    ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });

  const [resSpecialForYouProducts, resCart] = await Promise.all([specialForYouProxiApi, switchCartProxiApi]);

  const unpreparedProducts = await resSpecialForYouProducts.json();
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
