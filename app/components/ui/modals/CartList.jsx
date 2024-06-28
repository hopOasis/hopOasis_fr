'use client';
import { beer } from '@/app/static/bear';
import { useState } from 'react';
import CartItem from '../../ui/CartItem/CartItem';
import Total from './Total';

const initialState = Array(3)
  .fill(1)
  .map((el, idx) => ({ ...beer, id: idx, count: 1 }));

export default function CartList() {
  const [items, setItems] = useState(initialState);

  const remove = (id) =>
    setItems(items.filter(({ id: prevId }) => prevId !== id));

  const increment = (id) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    item.count += 1;
    setItems([...items]);
  };

  const decrement = (id) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    if (item.count === 1) return;
    item.count -= 1;
    setItems([...items]);
  };

  return (
    <>
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
      <Total
        total={items.reduce(
          (acc, { count, priceLarge }) => acc + count * priceLarge,
          0,
        )}
      />
    </>
  );
}
