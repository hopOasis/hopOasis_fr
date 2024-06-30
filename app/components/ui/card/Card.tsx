"use client";
import "./card.scss";
import { IProductCard } from "@/app/types/types";
import ImageBlock from "./ImageBlock";
import DescriptionBlock from "./DescriptionBlock";

export const Card = ({
  id,
  imageName,
  beerName,
  volumeLarge,
  priceLarge,
}: IProductCard) => {
  return (
    <article className="card shadow">
      <ImageBlock image={imageName?.[0]} name={beerName} id={id} />
      <DescriptionBlock
        name={beerName}
        volumeLarge={volumeLarge}
        priceLarge={priceLarge}
        id={id}
      />
    </article>
  );
};

export default Card;
