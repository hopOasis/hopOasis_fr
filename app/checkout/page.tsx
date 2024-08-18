import { Suspense } from 'react';
import './checkout.scss';
import CheckoutHeader from './components/CheckoutHeader';
import ChekoutForm from './components/ChekoutForm';
import Loader from '../components/ui/Loader/Loader';
import { localizationCity } from '../utils';
import { getLocation } from '../api/api';
import { fetchCartUtils } from '../utils/serverUtils';

export default async function Page() {
  const city = await getLocation();

  const switchCartProxiApi = await fetchCartUtils();

  const resCart = await switchCartProxiApi();
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
