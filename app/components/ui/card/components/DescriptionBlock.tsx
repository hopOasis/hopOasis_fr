import Link from "next/link";
import { routes } from "@/app/static/routes";
import { ProductType } from "@/app/types/types";
import { CardButton } from "../../buttons/buttons";
import { addProdactToCart } from "@/app/api/api";

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
          const data = await addProdactToCart({
            body: { itemId: id, quantity: 1, itemType: "BEER" },
            cookie: document.cookie,
          });
          console.log(data);
        }}
      />
    </div>
  );
}
