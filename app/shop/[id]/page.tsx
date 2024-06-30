import "./single-page.scss";
import { beer } from "@/app/static/bear";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import FeedBackSection from "./components/FeedBackSection";
import MainLayout from "@/app/components/containers/MainLayout/MainLayout";
import { getData } from "@/app/api/api";
import { Endpoints } from "@/app/api/types";

export async function generateStaticParams() {
  const path = await getData({ endpoint: Endpoints.beer });
  console.log(path);

  return path.map(({ beerName }) => ({
    name: beerName,
  }));
}



export default function SinglePage(props) {
  console.log(props);
  // const [activeTab, setActiveTab] = useState(0);

  return (
    <MainLayout>
      <main className="single-page">
        {/* <HeroSection
          {...beer}
          handleAddToCart={() => console.log("button-id", beer.id)}
          handleAddToFav={() => console.log("button-id", beer.id)}
          handleSetRating={(value) => console.log(value)}
        />
        <DeliveryPaymantSection
          {...beer}
          activeTab={activeTab}
          onClick={(idx) => setActiveTab(idx)}
        />
        <SpecialForYouSection />
        <FeedBackSection /> */}
      </main>
    </MainLayout>
  );
}
