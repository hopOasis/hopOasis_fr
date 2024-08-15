import { ProductType } from '@/app/types/types';
import Image from 'next/image';
import IncrementDecrement from '../IncrementDecrement/IncrementDecrement';
import Icons from '../icons/icons';
//@ts-ignore
export default function CartItem({
  imageName,
  beerName,
  quantity,
  priceLarge,
  increment,
  decrement,
  remove,
}: ProductType & {
  quantity?: number;
  increment: () => void;
  decrement: () => void;
  remove: () => void;
}) {
  return (
    <li className="cart-modal__container cart__list-item --line">
      <div className="list-item__left-block">
        <Image src={imageName[0]} width={54} height={93} alt="item" />
        <h3 className="typography__h5">{beerName}</h3>
      </div>
      <div className="list-item__middle-block">
        <IncrementDecrement
          count={quantity || 0}
          increment={increment}
          decrement={decrement}
        />
        <div>
          і<span>{`${quantity || 0 * priceLarge} грн`}</span>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <Icons name="trash" />
      </button>
    </li>
  );
}
