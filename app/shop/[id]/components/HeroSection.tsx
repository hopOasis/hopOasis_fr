"use client";
import Rating from "@/app/components/ui/Rating/Rating";
import { CardButton } from "@/app/components/ui/buttons/buttons";
import Icons from "@/app/components/ui/icons/icons";
import Section from "@/app/components/ui/section/section";
import Image from "next/image";
import { IPropsHeroSection } from "../types";

export default function HeroSection({
  id,
  beerName,
  image,
  priceLarge,
  rating,
}: IPropsHeroSection) {
  return (
    <Section>
      <Image src={image} alt={beerName} width={628} height={431} />
      <div className="single-page__description-block ">
        <h1 className="title typography__h2">{beerName}</h1>
        <p className="title typography__h2 accent">{priceLarge} грн.</p>
        <Rating rating={rating} onChange={(value) => console.log(value)} />
        <CardButton onClick={() => console.log("button-id", id)} />
        <button
          className="single-page__fav-button typography__h5"
          type="button"
          onClick={() => console.log("button-id", id)}
        >
          <Icons name="heart" /> Додати до обраного
        </button>
      </div>
    </Section>
  );
}
