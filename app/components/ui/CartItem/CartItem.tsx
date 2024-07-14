import Image from "next/image";
import Icons from "../icons/icons";
import IncrementDecrement from "../IncrementDecrement/IncrementDecrement";
import { ProductType } from "@/app/types/types";

export default function CartItem({
  imageName,
  beerName,
  quantity,
  priceLarge,
  increment,
  decrement,
  remove,
}: ProductType & { quantity: number }) {
  return (
    <li className="cart-modal__container cart__list-item --line">
      <div className="list-item__left-block">
        <Image src={imageName[0]} width={54} height={93} alt="item" />
        <h3 className="typography__h5">{beerName}</h3>
      </div>
      <div className="list-item__middle-block">
        <IncrementDecrement
          count={quantity}
          increment={increment}
          decrement={decrement}
        />
        <div>
          <span>{`${quantity * priceLarge} грн`}</span>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <Icons name="trash" />
      </button>
    </li>
  );
}
