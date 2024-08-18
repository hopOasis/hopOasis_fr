import './single-page.scss';
import { Suspense } from 'react';
import FeedBackSection from './components/FeedBackSection';
import MainLayout from '@/app/components/containers/MainLayout/MainLayout';
import { IProps } from './types';
import Loader from '@/app/components/ui/Loader/Loader';
import BreadCrumbs from '@/app/components/ui/BreadCrumbs/BreadCrumbs';
import { ProductType } from '@/app/types/types';
import HeroSection from './components/HeroSection';
import DeliveryPaymantSection from './components/DeliveryPaymantSection';
import SpecialForYouSection from './components/SpecialForYouSection';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { cookies } from 'next/headers';

export default async function SingleProductPage({ params: { id } }: IProps) {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;
  const switchCartProxiApi = !cartId
    ? fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : fetch(`${ProxiEndpoints.cart}/${cartId}`, { cache: 'no-store', method: 'GET' });
  const productProxiApi = await fetch(`${ProxiEndpoints.beer}/${id}`);

  const [resProduct, resCart] = await Promise.all([productProxiApi, switchCartProxiApi]);

  const unpreparedProduct = await resProduct.json();
  const cart = await resCart.json();

  const isInCart = cart.items.some(({ itemId }) => itemId === unpreparedProduct.id);
  const product = { ...unpreparedProduct, isInCart };

  return (
    <MainLayout>
      <main className="single-page">
        <Suspense fallback={<Loader />}>
          <BreadCrumbs product={product} />
          <HeroSection {...product} image={product.imageName[0]} />
          <DeliveryPaymantSection {...product} />
        </Suspense>
        <SpecialForYouSection />
        <FeedBackSection />
      </main>
    </MainLayout>
  );
}
