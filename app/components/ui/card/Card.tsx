"use client";
import "./card.scss";
import { IProductCard } from "@/app/types/types";
import ImageBlock from "./ImageBlock";
import DescriptionBlock from "./DescriptionBlock";
import { useState } from "react";

export const Card = ({
  id,
  image,
  name,
  volumeLarge,
  priceLarge,
}: IProductCard) => {
  const [[x, y], setPoints] = useState([0, 0]);
  return (
    <article
      className="card shadow"
      style={{ backgroundPosition: x + "px" + " " + y + "px" }}
      onMouseMove={(e) => {
        const { screenX, screenY } = e;
        setPoints([screenX, screenY]);
      }}
    >
      <ImageBlock image={image} name={name} id={id} />
      <DescriptionBlock
        name={name}
        volumeLarge={volumeLarge}
        priceLarge={priceLarge}
        id={id}
      />
    </article>
  );
};

export default Card;
