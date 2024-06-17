import Image from "next/image";
import { FavButton } from "../buttons/buttons";
import { IProductCard } from "@/app/types/types";

export default function ImageBlock({
  image,
  name,
  id,
}: Pick<IProductCard, "image" | "name" | "id">) {
  return (
    <div className="card__image-wrapper">
      <Image src={image} width={302} height={302} alt={`picture of ${name}`} />
      <FavButton
        onClick={() => {
          console.log("fav-button", id);
        }}
      />
    </div>
  );
}
