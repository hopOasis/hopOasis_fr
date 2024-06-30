import { IProductCard } from "@/app/types/types";
import { CardButton } from "../buttons/buttons";
import Link from "next/link";
import { routes } from "@/app/static/routes";

export default function DescriptionBlock({
  name,
  volumeLarge,
  priceLarge,
  id,
}: Pick<IProductCard, "name" | "volumeLarge" | "priceLarge" | "id">) {
  return (
    <div className="card__description-wrapper">
      <Link
        href={routes[2].href + "/" + id}
        className="card__name"
      >{`${name}`}</Link>
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
