import Image from 'next/image';
import IncrementDecrement from '../IncrementDecrement/IncrementDecrement';
import Icons from '../icons/icons';
import { IProps } from './types';

export default function CartItem({ image, name, quantity, priceLarge, increment, decrement, remove }: IProps) {
  return (
    <li className="cart-modal__container cart__list-item --line">
      <div className="list-item__left-block">
        <Image src={image[0]} width={54} height={93} alt="item" />
        <h3 className="typography__h5">{name}</h3>
      </div>
      <div className="list-item__middle-block">
        <IncrementDecrement count={quantity!} increment={increment} decrement={decrement} />
        <div>
          і<span>{`${quantity! * priceLarge} грн`}</span>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <Icons name="trash" />
      </button>
    </li>
  );
}
