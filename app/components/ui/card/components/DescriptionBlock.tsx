import Link from "next/link";
import { routes } from "@/app/static/routes";
import { ProductType } from "@/app/types/types";
import { CardButton } from "../../buttons/buttons";
import { oazaStorage } from "@/app/utils";
import revalidate from "@/app/actions";

export default function DescriptionBlock({
  beerName,
  volumeLarge,
  priceLarge,
  id,
}: Pick<ProductType, "beerName" | "volumeLarge" | "priceLarge" | "id">) {
  return (
    <div className="card__description-wrapper">
      <Link
        href={`${routes[2].href}/${id}`}
        className="card__name typography__h5"
      >{`${beerName}`}</Link>
      <p>{volumeLarge}</p>
      <p className="card__price typography__h3 accent">{`${priceLarge} грн.`}</p>
      <CardButton
        id={id}
        onClick={() => {
          oazaStorage.set({ id, quantity: 1 });
          revalidate();
        }}
      />
    </div>
  );
}
