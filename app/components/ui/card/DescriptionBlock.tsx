import { IProductCard } from "@/app/types/types";
import { CardButton } from "../buttons/buttons";

export default function DescriptionBlock({
  name,
  volumeLarge,
  priceLarge,
  id,
}: Pick<IProductCard, "name" | "volumeLarge" | "priceLarge" | "id">) {
  return (
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
  );
}
