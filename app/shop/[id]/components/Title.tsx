import gsap from "gsap";
import { IPropsTitle } from "../types";
import { useEffect } from "react";

export default function Title({ active, onClick }: IPropsTitle) {
  return (
    <div className="title">
      <button
        id="delivery-payment-tab-0"
        type="button"
        className={
          active === 0 ? "active-tab typography__h2" : "typography__h2"
        }
        onClick={() => {
          onClick(0);
        }}
      >
        Опис
      </button>
      <span className="separator"></span>
      <button
        id="delivery-payment-tab-1"
        type="button"
        className={
          active === 1 ? "active-tab typography__h2" : "typography__h2"
        }
        onClick={() => {
          onClick(1);
        }}
      >
        Доставка і оплата
      </button>
    </div>
  );
}
