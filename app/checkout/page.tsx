import { Suspense } from 'react';
import './checkout.scss';
import CheckoutHeader from './components/CheckoutHeader';
import ChekoutForm from './components/ChekoutForm';
import Loader from '../components/ui/Loader/Loader';
import { generateProducts } from '../utils';
import { fetchCartUtils } from '../utils/serverUtils';
import { ProxiEndpoints } from '../static/constants';
import { GeneratedProduct, PreparedProductApiResponse } from '../types/products';
import { CartProxiResponse } from '../types/cart';

export async function generateMetadata() {
  return {
    title: 'Оформлення замовлення - Інтернет-магазин крафтового пива',
    description:
      'Завершіть оформлення замовлення в нашому інтернет-магазині крафтового пива. Простий і зручний процес покупки з доставкою по Україні.',
  };
}

export default async function Page() {
  const beersProxiApi = () => fetch(ProxiEndpoints.beers, { method: 'GET' });
  const cidersProxiApi = () => fetch(ProxiEndpoints.ciders, { method: 'GET' });
  const snacksProxiApi = () => fetch(ProxiEndpoints.snacks, { method: 'GET' });
  const setsProxiApi = () => fetch(ProxiEndpoints.sets, { method: 'GET' });
  const switchCartProxiApi = fetchCartUtils();

  const [beersProducts, cidersProducts, snacksProducts, setsProducts, resCart] = await Promise.all([
    beersProxiApi(),
    cidersProxiApi(),
    snacksProxiApi(),
    setsProxiApi(),
    switchCartProxiApi(),
  ]);

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

  return (
    <>
      <CheckoutHeader />
      <main className="checkout container">
        <Suspense fallback={<Loader />}>
          <ChekoutForm cart={cart} />
        </Suspense>
      </main>
    </>
  );
}
