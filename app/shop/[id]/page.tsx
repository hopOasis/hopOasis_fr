import "./single-page.scss";
import { beer } from "@/app/static/bear";
import { Suspense, useState } from "react";
import HeroSection from "./components/HeroSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import FeedBackSection from "./components/FeedBackSection";
import MainLayout from "@/app/components/containers/MainLayout/MainLayout";
import { getById } from "@/app/api/api";
import { Endpoints } from "@/app/api/types";
import { parseProductName } from "@/app/utils";
import { IProps } from "./types";
import Loader from "@/app/components/ui/Loader/Loader";

export default async function SinglePage({ params: { id } }: IProps) {
  const product = await getById({ endpoint: Endpoints.beer, id });

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
