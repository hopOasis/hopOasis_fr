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
import { fetchCartUtils, fetchProductsUtils } from '@/app/utils/serverUtils';
import { separateFilter } from '@/app/utils';
import { PreparedProductType } from '@/app/types/products';
import { oaza_guest, ProxiEndpoints } from '@/app/static/constants';
import { cookies } from 'next/headers';

export async function generateMetadata({ params: { id } }) {
  const productProxiApi = fetchProductsUtils({ filter: separateFilter(id), id });

  const resProduct = await productProxiApi();
  const product: PreparedProductType = await resProduct.json();

  return {
    title: `${product.name} - Купити в магазині пива`,
    description: `Замовляйте ${product.name} у нашому інтернет-магазині крафтового пива. ${product.description}`,
    keywords: `${product.name}, купити ${product.name}, крафтове пиво, інтернет-магазин пива`,
    openGraph: {
      title: `${product.name} - Купити в магазині пива`,
      description: `Замовляйте ${product.name} у нашому інтернет-магазині крафтового пива.`,
      images: product.image.map((image) => ({ url: image })),
    },
  };
}

export default async function SingleProductPage({ params: { id } }: IProps) {
  const switchCartProxiApi = fetchCartUtils();
  const productProxiApi = fetchProductsUtils({ filter: separateFilter(id), id });
  const currentUserVotes = () => fetch(ProxiEndpoints.currentUserVotes, { cache: 'no-store', credentials: 'include' });

  const [resProduct, resCart, resVotes] = await Promise.all([
    productProxiApi(),
    switchCartProxiApi(),
    currentUserVotes(),
  ]);

  const unpreparedProduct = await resProduct.json();
  const cart = await resCart.json();

  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);
  const votesData = await resVotes.json();
  let votes = votesData.data.find((user: any) => user.cookie.value === oazaCookie.value);
  votes = votes?.votes || [];

  const isInCart = cart.items.some(({ itemId }) => itemId === unpreparedProduct.id);
  const isAllreadyVoted = votes.includes(unpreparedProduct.id);
  const product = { ...unpreparedProduct, isInCart, isAllreadyVoted };

  return (
    <MainLayout>
      <main className="single-page">
        <Suspense fallback={<Loader />}>
          <BreadCrumbs productName={product.name} />
          <HeroSection {...product} />
          <DeliveryPaymantSection {...product} />
        </Suspense>
        <SpecialForYouSection />
        <FeedBackSection />
      </main>
    </MainLayout>
  );
}
