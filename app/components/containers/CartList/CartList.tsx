'use client';
import { useCallback, useState } from 'react';
import Total from '../../ui/modals/cartModal/components/Total';
import './cart-list.scss';
import CartItem from '../../ui/CartItem/CartItem';
import { IProps } from './types';
import { throttle } from 'throttle-debounce';

export default function CartList({ cart }: IProps) {
  const [items, setItems] = useState(cart.items);

  const throttlingFetch = useCallback(
    throttle(
      2000,
      () => {
        console.log('trottle', cart.items);
      },
      { noLeading: true },
    ),
    [],
  );

  const remove = (id: number) => {
    setItems(items.filter(({ itemId: prevId }) => prevId !== id));
    throttlingFetch();
  };

  const increment = (id: number) => {
    const item = items.find(({ itemId: prevId }) => prevId === id);
    //@ts-ignore
    item.quantity += 1;
    setItems([...items]);
    throttlingFetch();
  };

  const decrement = (id: number) => {
    const item = items.find(({ itemId: prevId }) => prevId === id);
    //@ts-ignore
    if (item.quantity === 1) {
      throttlingFetch();
      return;
    }
    //@ts-ignore
    item.quantity -= 1;
    setItems([...items]);
    throttlingFetch();
  };

  return (
    <>
      <Total total={cart.priceForAll} />
      {items.length > 0 ? (
        <ul className="cart__list">
          {items.map((props) => (
            <CartItem
              key={props.itemId}
              {...props}
              remove={() => remove(props.itemId)}
              increment={() => increment(props.itemId)}
              decrement={() => decrement(props.itemId)}
            />
          ))}
        </ul>
      ) : (
        <div className="cart-modal__container">No items</div>
      )}
    </>
  );
}
