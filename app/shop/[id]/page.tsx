"use client";
import "./single-page.scss";
import { beer } from "@/app/static/bear";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import DeliveryPaymantSection from "./components/DeliveryPaymantSection";
import SpecialForYouSection from "./components/SpecialForYouSection";
import FeedBackSection from "./components/FeedBackSection";


export default function SinglePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="single-page">
      <HeroSection
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
      <FeedBackSection />
    </main>
  );
}
