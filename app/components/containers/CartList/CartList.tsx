'use client';
import { useCallback, useState } from 'react';
import Total from '../../ui/modals/cartModal/components/Total';
import './cart-list.scss';
import CartItem from '../../ui/CartItem/CartItem';
import { IProps } from './types';
import { throttle } from 'throttle-debounce';
import NoItems from '../../ui/NoItems/NoItems';

export default function CartList({ cart }: IProps) {
  const [items, setItems] = useState(cart.content.filter((product) => product.isInCart));

  const throttlingFetch = useCallback(
    throttle(
      2000,
      () => {
        console.log('trottle', cart);
      },
      { noLeading: true },
    ),
    [],
  );

  const remove = (id: string) => {
    setItems(items.filter(({ id: prevId }) => prevId !== id));
    throttlingFetch();
  };

  const increment = (id: string) => {
    const item = items.find(({ id: prevId }) => prevId === id)!;
    item.quantity! += 1;
    setItems([...items]);
    throttlingFetch();
  };

  const decrement = (id: string) => {
    const item = items.find(({ id: prevId }) => prevId === id)!;
    if (item.quantity === 1) {
      throttlingFetch();
      return;
    }
    item.quantity! -= 1;
    setItems([...items]);
    throttlingFetch();
  };

  return (
    <>
      <Total
        total={cart.content.reduce((acc, cartItem) => {
          return (acc += cartItem.priceLarge * cartItem?.quantity! || 0);
        }, 0)}
      />
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
        <div className="cart-modal__container ">
          <NoItems />
        </div>
      )}
    </>
  );
}
