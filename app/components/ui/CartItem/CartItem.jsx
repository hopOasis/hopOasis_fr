import Image from "next/image";
import Icons from "../icons/icons";

export default function CartItem({
  id,
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
          <button type="button" onClick={decrement}>
            <Icons name="minus" stroke="#696969" />
          </button>
          <span>{count}</span>
          <button type="button" onClick={increment}>
            <Icons name="plus" stroke="#696969" />
          </button>
        </div>
        <div>
          <span>{count * priceLarge + " грн"}</span>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <Icons name="trash" stroke="#B3B3B2" />
      </button>
    </li>
  );
}
