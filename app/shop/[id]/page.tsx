import "./single-page.scss";
import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import FeedBackSection from "./components/FeedBackSection";
import MainLayout from "@/app/components/containers/MainLayout/MainLayout";
import { Endpoints } from "@/app/api/types";
import { IProps } from "./types";
import Loader from "@/app/components/ui/Loader/Loader";
import { getProductById } from "@/app/api/api";
import BreadCrumbs from "@/app/components/ui/BreadCrumbs/BreadCrumbs";

export default async function SingleProductPage({ params: { id } }: IProps) {
  // const product = await getProductById({ endpoint: Endpoints.beer, id });

  return (
    <MainLayout>
      <main className="single-page">
        {/* <Suspense fallback={<Loader />}>
          <BreadCrumbs product={product} />
          <HeroSection {...product} image={product.imageName[0]} />
          <DeliveryPaymantSection {...product} />
        </Suspense> */}
        <SpecialForYouSection />
        <FeedBackSection />
      </main>
    </MainLayout>
  );
}
