import './single-page.scss';
import { Suspense } from 'react';
import FeedBackSection from './components/FeedBackSection';
import MainLayout from '@/app/components/containers/MainLayout/MainLayout';
import { IProps } from './types';
import Loader from '@/app/components/ui/Loader/Loader';
import BreadCrumbs from '@/app/components/ui/BreadCrumbs/BreadCrumbs';
import HeroSection from './components/HeroSection';
import DeliveryPaymantSection from './components/DeliveryPaymantSection';
import SpecialForYouSection from './components/SpecialForYouSection';
import { ProxiEndpoints } from '@/app/static/constants';
import { fetchCartUtils } from '@/app/utils/serverUtils';
import { PreparedProductType } from '@/app/types/products';

export default async function SingleProductPage({ params: { id }, searchParams: { filter } }: IProps) {
  const switchCartProxiApi = fetchCartUtils();
  const productProxiApi = () =>
    fetch(`${ProxiEndpoints.products}/${id}`, { method: 'POST', body: JSON.stringify({ filter }) });

  const [resProduct, resCart] = await Promise.all([productProxiApi(), switchCartProxiApi()]);

  const unpreparedProduct = await resProduct.json();
  const cart = await resCart.json();

  const isInCart = cart.items.some(({ itemId }) => itemId === unpreparedProduct.id);
  const product = { ...unpreparedProduct, isInCart };

  return (
    <MainLayout>
      <main className="single-page">
        <Suspense fallback={<Loader />}>
          <BreadCrumbs productName={product.name} />
          <HeroSection {...product}  />
          <DeliveryPaymantSection {...product} />
        </Suspense>
        <SpecialForYouSection />
        <FeedBackSection />
      </main>
    </MainLayout>
  );
}
