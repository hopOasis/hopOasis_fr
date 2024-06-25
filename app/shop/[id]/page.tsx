"use client";
import "./single-page.scss";
import { beer } from "@/app/static/bear";
import Section from "@/app/components/ui/section/section";
import Rating from "@/app/components/ui/Rating/Rating";
import { useState } from "react";
import Title from "./Title";
import DeliveryText from "@/app/components/ui/DeliveryText/DeliveryText";
import Icons from "@/app/components/ui/icons/icons";
import { CardButton } from "@/app/components/ui/buttons/buttons";

export default function SinglePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="single-page">
      <h3>I am a beer</h3>
      <Section>
        <p className="accent">{beer.priceLarge} грн.</p>
        <Rating onChange={(value) => console.log(value)} />
        <CardButton
          onClick={() => {
            console.log("button-id", beer.id);
          }}
        />
        <button
          className="single-page__fav-button"
          type="button"
          onChange={() => console.log(beer.id)}
        >
          <Icons name="heart" stroke="#292929" /> Додати до обраного
        </button>
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
