"use client";
import "./card.scss";
import ImageBlock from "./ImageBlock";
import DescriptionBlock from "./DescriptionBlock";
import { ShopCardType } from "@/app/shop/types";

export const Card = ({
  id,
  imageName,
  beerName,
  volumeLarge,
  priceLarge,
}: ShopCardType) => {
  return (
    <article className="card shadow">
      <ImageBlock image={imageName?.[0]} name={beerName} id={id} />
      <DescriptionBlock
        beerName={beerName}
        volumeLarge={volumeLarge}
        priceLarge={priceLarge}
        id={id}
      />
    </article>
  );
};

export default Card;
