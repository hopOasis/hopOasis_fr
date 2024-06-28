import Rating from "@/app/components/ui/Rating/Rating";
import { CardButton } from "@/app/components/ui/buttons/buttons";
import Icons from "@/app/components/ui/icons/icons";
import Section from "@/app/components/ui/section/section";
import Image from "next/image";
import { IPropsHeroSection } from "../types";

export default function HeroSection({
  name,
  image,
  priceLarge,
  rating,
  handleAddToCart,
  handleAddToFav,
  handleSetRating,
}: IPropsHeroSection) {
  return (
    <Section>
      <Image src={image} alt={name} width={628} height={431} />
      <div className="single-page__description-block">
        <h1 className="title">{name}</h1>
        <p className="title accent">{priceLarge} грн.</p>
        <Rating rating={rating} onChange={handleSetRating} />
        <CardButton onClick={handleAddToCart} />
        <button
          className="single-page__fav-button typography__h5"
          type="button"
          onClick={handleAddToFav}
        >
          <Icons name="heart" /> Додати до обраного
        </button>
      </div>
    </Section>
  );
}
