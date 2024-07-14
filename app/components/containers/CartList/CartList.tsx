"use client";
import { useState } from "react";
import Total from "../../ui/modals/Total";
import "./cart-list.scss";
import { IProps } from "./types";
import CartItem from "../../ui/CartItem/CartItem";

export default function CartList({ cart }: IProps) {
  const [items, setItems] = useState(cart.items);

  const remove = (id: number) =>
    setItems(items.filter(({ id: prevId }) => prevId !== id));

  const increment = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    item.count += 1;
    setItems([...items]);
  };

  const decrement = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    if (item.count === 1) return;
    item.count -= 1;
    setItems([...items]);
  };


  return (
    <>
      <Total
        total={items.reduce(
          (acc, { quantity, priceLarge }) => acc + quantity * priceLarge,
          0
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
        <div>No items</div>
      )}
    </>
  );
}
