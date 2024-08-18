'use client';
import Field from '@/app/components/ui/Field/Field';
import IncrementDecrement from '@/app/components/ui/IncrementDecrement/IncrementDecrement';
import RadioButtons from '@/app/components/ui/RadioButtons/RadioButtons';
import Icons from '@/app/components/ui/icons/icons';
import MainLink from '@/app/components/ui/links/links';
import Popup from '@/app/components/ui/popup/Popup';
import { beer } from '@/app/static/bear';
import { deliveryRadio, fields, paymentRadio } from '@/app/static/form';
import { routes } from '@/app/static/routes';
import { Palitra } from '@/app/types/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { FormStateType, IPropsChekoutForm } from '../types';
import { DepartmentComponent } from './deliveryRadioComponents';
import { CartResponseType } from '@/app/api/types';

const initialState = Array(3)
  .fill(1)
  .map((el, idx) => ({ ...beer, id: idx, count: 1 }));

export default function ChekoutForm({ location, cart }: IPropsChekoutForm) {
  const [isTrueCurrentLocation, setIsTrueCurrentLocation] = useState<
    boolean | null
  >(null);
  const [values, setValues] = useState<FormStateType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    delivery: deliveryRadio[0].id,
    payment: paymentRadio[0].id,
  });
  const [items, setItems] = useState(initialState);

  const remove = (id: number) =>
    setItems(items.filter(({ id: prevId }) => prevId !== id));

  const throttlingFetch = useCallback(
    throttle(
      2000,
      () => {
        console.log(
          'trottle',
          items.map(({ id, count }) => ({
            itemId: id,
            quantity: count,
          })),
        );
      },
      { noLeading: true },
    ),
    [],
  );

  const increment = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    if (item) {
      item.count += 1;
    }
    setItems([...items]);
    throttlingFetch();
  };

  const decrement = (id: number) => {
    const item = items.find(({ id: prevId }) => prevId === id);
    if (item && item.count === 1) {
      throttlingFetch();
      return;
    }
    if (item) {
      item.count -= 1;
    }
    setItems([...items]);
    throttlingFetch();
  };

  const components = {
    department: (
      <DepartmentComponent
        location={isTrueCurrentLocation ? location : ''}
        isTrueCurrentLocation={isTrueCurrentLocation}
        setIsTrueCurrentLocation={setIsTrueCurrentLocation}
      />
    ),
    'parcel-station': null,
    courier: null,
  };
  return (
    <>
      <form className="form">
        <div className="form__left-block">
          <div className="form__fields-block">
            <div className="form__header">
              <h1 className="typography__h3">Оформлення замовлення</h1>
              <MainLink href={routes[7].href} variant={Palitra.white}>
                Я маю обліковий запис
              </MainLink>
            </div>
            <p className="typography__h8">Особисті дані</p>
            {fields.slice(0, 4).map((props) => (
              <Field
                key={props.id}
                {...props}
                //@ts-ignore

                value={values[props.id]}
                onChange={({ id, value }) =>
                  //@ts-ignore
                  setValues({ ...values, [id]: value })
                }
              />
            ))}
          </div>

          <div className="form__fields-block">
            <p className="typography__h8">Доставка</p>
            {deliveryRadio.map((props) => (
              <RadioButtons
                key={props.id}
                {...props}
                checked={values.delivery === props.id}
                onChange={({ value }) =>
                  setValues({ ...values, delivery: value })
                }
              >
                {values.delivery === props.id
                  ? //@ts-ignore
                    components[values.delivery]
                  : null}
              </RadioButtons>
            ))}
          </div>

          <div className="form__fields-block">
            <p className="typography__h8">Оплата</p>
            {paymentRadio.map((props) => (
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
      <Popup
        city={location}
        setIsTrueCurrentLocation={(answer) =>
          setIsTrueCurrentLocation(Boolean(answer))
        }
      />
    </>
  );
}
