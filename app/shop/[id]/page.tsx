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
import Image from "next/image";
import { feedback } from "@/app/static/feedbacks";
import FeedBackCard from "@/app/components/ui/FeedBackCard/FeedBackCard";

export default function SinglePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="single-page">
      <Section>
        <Image src={beer.image} alt={beer.name} width={628} height={431} />
        <div className="single-page__description-block">
          <h1 className="title">{beer.name}</h1>
          <p className="title accent">{beer.priceLarge} грн.</p>
          <Rating
            rating={beer.rating}
            onChange={(value) => console.log(value)}
          />
          <CardButton
            onClick={() => {
              console.log("button-id", beer.id);
            }}
          />
          <button
            className="single-page__fav-button typography__h5"
            type="button"
            onChange={() => console.log(beer.id)}
          >
            <Icons name="heart" stroke="#292929" /> Додати до обраного
          </button>
        </div>
      </Section>
      <Section>
        <Title
          active={activeTab}
          onClick={(idx: number) => setActiveTab(idx)}
        />
        {[<p>{beer.description}</p>, <DeliveryText />][activeTab]}
      </Section>
      <Section>
        <h2 className="title">Відгуки</h2>
        <ul className="feedback__list">
          {feedback.map((el, idx) => (
            <li className="feedback__item shadow" key={idx}>
              <FeedBackCard {...el} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
