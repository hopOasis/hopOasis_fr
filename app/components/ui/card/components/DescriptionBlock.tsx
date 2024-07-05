import Link from "next/link";
import { routes } from "@/app/static/routes";
import { ProductType } from "@/app/types/types";
import { ProxiEndpoints } from "@/app/api/types";
import { CardButton } from "../../buttons/buttons";

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
      {/* <input type="file" /> */}
      <CardButton
        onClick={async () => {
          // const formData = new FormData();
          // formData.append("itemId", "3");
          // formData.append("quantity", "1");
          // formData.append("itemType", "BEER");

          // const formDataBeer = new FormData();
          // formDataBeer.append("name", "3");
          // formDataBeer.append("volumeLarge", "1");
          // formDataBeer.append("volumeSmall", "5");
          // formDataBeer.append("priceLarge", "5");
          // formDataBeer.append("priceSmall", "3");
          // formDataBeer.append("description", "test");
          // formDataBeer.append("image", new Blob(img), 'file');
          const allCookies = document.cookie;
          console.log(allCookies.slice(7));
          await fetch(ProxiEndpoints.cart, {
            method: "POST",
            headers: {
              Cookie: `_vid_t=${allCookies.slice(7)}`,
            },
            body: JSON.stringify({
              itemId: id,
              quantity: 1,
              itemType: "BEER",
            }),
          });

          // console.log(await res.json());
        }}
      />
    </div>
  );
}
