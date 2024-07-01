"use client";
import { useState } from "react";
import Field from "../components/ui/Field/Field";
import { LogoLink } from "../components/ui/links/links";
import { fields, radio } from "../static/form";
import "./checkout.scss";
import { FormStateType } from "./types";
import RadioButtons from "../components/ui/RadioButtons/RadioButtons";
import { beer } from "../static/bear";
import Image from "next/image";
import IncrementDecrement from "../components/ui/IncrementDecrement/IncrementDecrement";
import Icons from "../components/ui/icons/icons";
import { Palitra } from "../types/types";

const initialState = Array(3)
  .fill(1)
  .map((el, idx) => ({ ...beer, id: idx, count: 1 }));

export default function Page() {
  const [values, setValues] = useState<FormStateType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    payment: radio[0].id,
  });
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
      <header className="checkout-header">
        <div className="container">
          <LogoLink variant={Palitra.dark} />
        </div>
      </header>
      <main className="checkout container">
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
                  onChange={({ value }) =>
                    setValues({ ...values, payment: value })
                  }
                />
              ))}
            </div>
          </div>
          <div className="form__right-block">
            <p className="typography__h3 right-block--padding">
              Ваше замовлення
            </p>

            <ul className="form__cart-list">
              {items.map((props) => (
                <>
                  <li key={props.id} className="form__cart-item --line">
                    <Image
                      src={props.image}
                      width={54}
                      height={93}
                      alt="item"
                    />
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
                </>
              ))}
            </ul>
          </div>
        </form>
      </main>
    </>
  );
}
