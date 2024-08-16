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
    setItems(items.filter(({ id: prevId }) => prevId !== id));
    throttlingFetch();
  };

  const increment = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    //@ts-ignore
    item.count += 1;
    setItems([...items]);
    throttlingFetch();
  };

  const decrement = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    //@ts-ignore
    if (item.count === 1) {
      throttlingFetch();
      return;
    }
    //@ts-ignore
    item.count -= 1;
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
              key={props.id}
              {...props}
              remove={() => remove(props.id)}
              increment={() => increment(props.id)}
              decrement={() => decrement(props.id)}
            />
          ))}
        </ul>
      ) : (
        <div className="cart-modal__container">No items</div>
      )}
    </>
  );
}
