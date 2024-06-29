import { IPropsTitle } from "../types";

export default function Title({ active, onClick }: IPropsTitle) {
  return (
    <p className="title">
      <button
        type="button"
        className={active === 0 ? "active-tab" : undefined}
        onClick={() => onClick(0)}
      >
        Опис
      </button>
      <span> | </span>
      <button
        type="button"
        className={active === 1 ? "active-tab" : undefined}
        onClick={() => onClick(1)}
      >
        Доставка і оплата
      </button>
    </p>
  );
}
