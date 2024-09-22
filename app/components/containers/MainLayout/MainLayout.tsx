import Footer from '../footer/footer';
import { Header } from '../header/Header';
import { IProps } from './types';
import { Suspense } from 'react';
import Loader from '../../ui/Loader/Loader';
import CartModal from '../../ui/modals/cartModal/CartModal';
import { generateProducts } from '@/app/utils';
import { ProxiEndpoints } from '@/app/static/constants';
import { fetchCartUtils } from '@/app/utils/serverUtils';
import { GeneratedProduct, PreparedProductApiResponse } from '@/app/types/products';
import { CartProxiResponse } from '@/app/types/cart';

export default async function MainLayout({ children }: IProps) {
  const switchCartProxiApi = fetchCartUtils();
  const specialForYouProxiApi = () => fetch(ProxiEndpoints.specialForYou, { method: 'GET'});

  const beersProxiApi = () => fetch(ProxiEndpoints.beers, { method: 'GET' });
  const cidersProxiApi = () => fetch(ProxiEndpoints.ciders, { method: 'GET' });
  const snacksProxiApi = () => fetch(ProxiEndpoints.snacks, { method: 'GET' });
  const setsProxiApi = () => fetch(ProxiEndpoints.sets, { method: 'GET' });

  const [specialForYouProducts, beersProducts, cidersProducts, snacksProducts, setsProducts, resCart] =
    await Promise.all([
      specialForYouProxiApi(),
      beersProxiApi(),
      cidersProxiApi(),
      snacksProxiApi(),
      setsProxiApi(),
      switchCartProxiApi(),
    ]);

  const responseSpecialForYouProducts: PreparedProductApiResponse = await specialForYouProducts.json();
  const responseBeersProducts: PreparedProductApiResponse = await beersProducts.json();
  const responseCidersProducts: PreparedProductApiResponse = await cidersProducts.json();
  const responseSnacksProducts: PreparedProductApiResponse = await snacksProducts.json();
  const responseSetsProducts: PreparedProductApiResponse = await setsProducts.json();

  const responseProxiCart: CartProxiResponse = await resCart.json();

  const cart: GeneratedProduct = generateProducts({
    products: {
      ...responseBeersProducts,
      ...responseCidersProducts,
      ...responseSnacksProducts,
      ...responseSetsProducts,
      content: [
        ...responseBeersProducts.content,
        ...responseCidersProducts.content,
        ...responseSnacksProducts.content,
        ...responseSetsProducts.content,
      ],
    },
    cart: responseProxiCart,
  });

  const specialForYou: GeneratedProduct = generateProducts({
    products: responseSpecialForYouProducts,
    cart: responseProxiCart,
  });

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Suspense fallback={<Loader />}>
        <CartModal cart={cart} specialForYou={specialForYou} />
      </Suspense>
    </>
  );
}
