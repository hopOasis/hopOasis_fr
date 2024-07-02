import { CardButton } from "../buttons/buttons";
import Link from "next/link";
import { routes } from "@/app/static/routes";
import { ProductType } from "@/app/types/types";
import { postCartData } from "@/app/api/api";
import { Endpoints, ProxiEndpoints } from "@/app/api/types";

export default function DescriptionBlock({
  beerName,
  volumeLarge,
  priceLarge,
  id,
}: Pick<ProductType, "beerName" | "volumeLarge" | "priceLarge" | "id">) {
  return (
    <div className="card__description-wrapper">
      <Link
        href={routes[2].href + "/" + id}
        className="card__name typography__h5"
      >{`${beerName}`}</Link>
      <p>{volumeLarge}</p>
      <p className="card__price typography__h3 accent">{`${priceLarge} грн.`}</p>
      <CardButton
        onClick={async () => {
          const body = { itemId: id, quantity: 1, itemType : "BEER"};
          await fetch(ProxiEndpoints.cart, {
            method: "POST",
            body: JSON.stringify(body),
          });
        }}
      />
    </div>
  );
}
