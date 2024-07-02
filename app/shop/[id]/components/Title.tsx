import { IPropsTitle } from "../types";

export default function Title({ active, onClick }: IPropsTitle) {
  return (
    <p className="title ">
      <button
        type="button"
        className={
          active === 0 ? "active-tab typography__h2" : "typography__h2"
        }
        onClick={() => onClick(0)}
      >
        Опис
      </button>
      <span className="typography__h2"> | </span>
      <button
        type="button"
        className={
          active === 1 ? "active-tab typography__h2" : "typography__h2"
        }
        onClick={() => onClick(1)}
      >
        Доставка і оплата
      </button>
    </p>
  );
}
