import "./single-page.scss";
import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import FeedBackSection from "./components/FeedBackSection";
import MainLayout from "@/app/components/containers/MainLayout/MainLayout";
import { ProxiEndpoints } from "@/app/api/types";
import { IProps } from "./types";
import Loader from "@/app/components/ui/Loader/Loader";

export default async function ProductPage({ params: { id } }: IProps) {
  const res = await fetch(ProxiEndpoints.beer + "/" + id);
  const product = await res.json()
  
  return (
    <MainLayout>
      <main className="single-page">
        <Suspense fallback={<Loader />}>
          <HeroSection {...product} image={product.imageName[0]} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <DeliveryPaymantSection {...product} />
        </Suspense>
        <SpecialForYouSection />
        <FeedBackSection />
      </main>
    </MainLayout>
  );
}
