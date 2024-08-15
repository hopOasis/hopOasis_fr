import Icons from "../icons/icons";
import './increment-decrement.scss'
import { IProps } from "./types";

export default function IncrementDecrement({ count, decrement, increment }: IProps) {
  return (
    <div className="incremenet-decrement">
      <button
        type="button"
        className={count !== 1 ? "accent" : undefined}
        onClick={decrement}
      >
        <Icons name="minus" />
      </button>
      <span>{count}</span>
      <button
        type="button"
        className={count >= 1 ? "accent" : undefined}
        onClick={increment}
      >
        <Icons name="plus" />
      </button>
    </div>
  );
}
