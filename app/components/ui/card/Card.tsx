"use client";
import Image from "next/image";
import "./card.scss";
import Icons from "../icons/icons";
import { IProductCard } from "@/app/types/types";
import { CardButton, FavButton } from "../buttons/buttons";

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
      <div className="card__image-wrapper">
        <Image
          src={image}
          width={302}
          height={302}
          alt={`picture of ${name}`}
        />
        <FavButton onClick={ ()=>{console.log("fav-button", id)}} />
          
      </div>
      <div className="card__description-wrapper">
        <p className="card__name">{`${name}`}</p>
        <p className="card__info">{volumeLarge}</p>
        <p className="card__price">{`${priceLarge} грн.`}</p>
        <CardButton
          onClick={() => {
            console.log("button-id", id);
          }}
        />
      </div>
    </article>
  );
};

export default Card;
