import Image from "next/image";
import Icons from "../icons/icons";
import IncrementDecrement from "../IncrementDecrement/IncrementDecrement";

export default function CartItem({
  image,
  name,
  count,
  priceLarge,
  increment,
  decrement,
  remove,
}) {
  return (
    <li className="cart-modal__container cart__list-item --line">
      <div className="list-item__left-block">
        <Image src={image} width={54} height={93} alt="item" />
        <h3>{name}</h3>
      </div>
      <div className="list-item__middle-block">
        <IncrementDecrement count={count} increment={increment} decrement={decrement} />
        <div>
          <span>{`${count * priceLarge} грн`}</span>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <Icons name="trash" />
      </button>
    </li>
  );
}
