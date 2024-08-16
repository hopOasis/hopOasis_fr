'use client';
import { useState } from 'react';
import Total from '../../ui/modals/cartModal/components/Total';
import './cart-list.scss';
import CartItem from '../../ui/CartItem/CartItem';
import { IProps } from './types';

export default function CartList({ cart }: IProps) {
  const [items, setItems] = useState(cart.items);

  const remove = (id: number) =>
    setItems(items.filter(({ id: prevId }) => prevId !== id));

  const increment = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    //@ts-ignore
    item.count += 1;
    setItems([...items]);
  };

  const decrement = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    //@ts-ignore
    if (item.count === 1) return;
    //@ts-ignore
    item.count -= 1;
    setItems([...items]);
  };

  return (
    <>
      <Total
        total={items.reduce(
          //@ts-ignore
          (acc, { quantity, priceLarge }) => acc + quantity * priceLarge,
          0,
        )}
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
        <div className="cart-modal__container">No items</div>
      )}
    </>
  );
}
