import Image from "next/image";
import Icons from "../icons/icons";

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
        <div className="incremenet-decrement">
          <button
            type="button"
            className={count !== 1 ? "accent" : undefined}
            onClick={decrement}
          >
            <Icons name="minus" />
          </button>
          <span>{count}</span>
          <button
            type="button"
            className={count >= 1 ? "accent" : undefined}
            onClick={increment}
          >
            <Icons name="plus" />
          </button>
        </div>
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
