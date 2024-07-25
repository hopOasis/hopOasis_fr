import "./single-page.scss";
import { Suspense } from "react";
import FeedBackSection from "./components/FeedBackSection";
import MainLayout from "@/app/components/containers/MainLayout/MainLayout";
import { Endpoints, ProxiEndpoints } from "@/app/api/types";
import { IProps } from "./types";
import Loader from "@/app/components/ui/Loader/Loader";
import { getProductById } from "@/app/api/api";
import BreadCrumbs from "@/app/components/ui/BreadCrumbs/BreadCrumbs";
import { ProductType } from "@/app/types/types";
import HeroSection from "./components/HeroSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";

export default async function SingleProductPage({ params: { id } }: IProps) {
  // const product = await getProductById({ endpoint: Endpoints.beer, id });

  const resProduct = await fetch(`${ProxiEndpoints.beer}/${id}`);
  const product: ProductType = await resProduct.json();

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
