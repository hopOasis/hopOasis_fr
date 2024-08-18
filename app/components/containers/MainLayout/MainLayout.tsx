import { CartResponseType, ProductsResponseType } from '@/app/api/types';
import Footer from '../footer/footer';
import { Header } from '../header/Header';
import { IProps } from './types';
import { Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import CartModal from '../../ui/modals/cartModal/CartModal';
import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';

export default async function MainLayout({ children }: IProps) {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const generateCartId = () => {
    if (!oazaCookie) {
      return { cartId: false };
    }
    return { cartId: oazaCookie.value };
  };

  const body = generateCartId();

  const [resProducts, resCart] = await Promise.all([
    fetch(ProxiEndpoints.beer, { cache: 'no-store' }),
    fetch(ProxiEndpoints.cart, { cache: 'no-store', method: 'POST', body: JSON.stringify({ ...body }) }),
  ]);

  const products = await resProducts.json();
  const cart = await resCart.json();

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
