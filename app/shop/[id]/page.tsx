"use client";
import "./single-page.scss";
import { beer } from "@/app/static/bear";
import Section from "@/app/components/ui/section/section";
import Rating from "@/app/components/ui/Rating/Rating";
import { useState } from "react";
import Title from "./Title";
import DeliveryText from "@/app/components/ui/DeliveryText/DeliveryText";

export default function SinglePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="single-page">
      <h3>I am a beer</h3>
      <Section>
        <Rating onChange={(value) => console.log(value)} />
      </Section>
      <Section>
        <Title
          active={activeTab}
          onClick={(idx: number) => setActiveTab(idx)}
        />
        {[<p>{beer.description}</p>, <DeliveryText />][activeTab]}
      </Section>
    </main>
  );
}
