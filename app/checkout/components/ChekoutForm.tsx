"use client";
import { useState } from "react";
import { FormStateType } from "../types";
import { fields, radio } from "@/app/static/form";
import Field from "@/app/components/ui/Field/Field";
import RadioButtons from "@/app/components/ui/RadioButtons/RadioButtons";
import Image from "next/image";
import IncrementDecrement from "@/app/components/ui/IncrementDecrement/IncrementDecrement";
import Icons from "@/app/components/ui/icons/icons";
import { beer } from "@/app/static/bear";

const initialState = Array(3)
  .fill(1)
  .map((el, idx) => ({ ...beer, id: idx, count: 1 }));

export default function ChekoutForm() {
  const [values, setValues] = useState<FormStateType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    payment: radio[0].id,
  });
  const [items, setItems] = useState(initialState);

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
    <form className="form">
      <div className="form__left-block">
        <div className="form__fields-block">
          <p className="typography__h8">Особисті дані</p>
          {fields.map((props) => (
            <Field
              key={props.id}
              {...props}
              onChange={({ id, value }) =>
                setValues({ ...values, [id]: value })
              }
            />
          ))}
        </div>

        {/* <div className="form__fields-block">
            <p className="typography__h8">Оплата</p>
            {radio.map((props) => (
              <RadioButtons
                key={props.id}
                {...props}
                checked={values.payment === props.id}
                onChange={({ value }) =>
                  setValues({ ...values, payment: value })
                }
              />
            ))}
          </div> */}
        <div className="form__fields-block">
          <p className="typography__h8">Оплата</p>
          {radio.map((props) => (
            <RadioButtons
              key={props.id}
              {...props}
              checked={values.payment === props.id}
              onChange={({ value }) => setValues({ ...values, payment: value })}
            />
          ))}
        </div>
      </div>
      <div className="form__right-block">
        <p className="typography__h3 right-block--padding">Ваше замовлення</p>

        <ul className="form__cart-list">
          {items.map((props) => (
            <li key={props.id} className="form__cart-item --line">
              <Image src={props.image} width={54} height={93} alt="item" />
              <h3>{props.name}</h3>
              <IncrementDecrement
                count={props.count}
                increment={() => increment(props.id)}
                decrement={() => decrement(props.id)}
              />
              <button type="button" onClick={() => remove(props.id)}>
                <Icons name="trash" />
              </button>
              <span>{`${props.count * props.priceLarge} грн`}</span>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
