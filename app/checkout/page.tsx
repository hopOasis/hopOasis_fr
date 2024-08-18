import { Suspense } from 'react';
import './checkout.scss';
import CheckoutHeader from './components/CheckoutHeader';
import ChekoutForm from './components/ChekoutForm';
import Loader from '../components/ui/Loader/Loader';
import { localizationCity } from '../utils';
import { getLocation } from '../api/api';
import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '../static/constants';

export default async function Page() {
  const city = await getLocation();

  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;
  const switchCartProxiApi = !cartId
    ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });

  const resCart = await switchCartProxiApi;
  const cart = await resCart.json();


  return (
    <>
      <CheckoutHeader />
      <main className="checkout container">
        <Suspense fallback={<Loader />}>
          <ChekoutForm location={localizationCity(city)} cart={cart} />
        </Suspense>
      </main>
    </>
  );
}
