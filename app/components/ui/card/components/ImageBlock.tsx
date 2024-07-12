import Image from "next/image";
import { FavButton } from "../../buttons/buttons";
import { ProductType } from "@/app/types/types";

export default function ImageBlock({
  image,
  name,
  id,
}: Pick<ProductType, "image" | "name" | "id">) {
  return (
    <div className="card__image-wrapper">
      <div className="card__image-container"> 
        <img
          src={image}
          width={302}
          height={302}
          alt={`picture of ${name}`}
        />
      </div>
      <FavButton
        onClick={() => {
          console.log("fav-button", id);
        }}
      />
    </div>
  );
}
