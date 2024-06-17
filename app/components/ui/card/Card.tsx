"use client";
import "./card.scss";
import { IProductCard } from "@/app/types/types";
import ImageBlock from "./ImageBlock";
import DescriptionBlock from "./DescriptionBlock";
import CardBackDrop from "./CardBackDrop";
import CardFrontLines from "./CardFrontLines";

export const Card = ({
  id,
  image,
  name,
  volumeLarge,
  priceLarge,
}: // description,
IProductCard) => {
  return (
    <article className="card shadow">
      <ImageBlock image={image} name={name} id={id} />
      <DescriptionBlock
        name={name}
        volumeLarge={volumeLarge}
        priceLarge={priceLarge}
        id={id}
      />
      <CardBackDrop />
      <CardFrontLines/>
    </article>
  );
};

export default Card;
